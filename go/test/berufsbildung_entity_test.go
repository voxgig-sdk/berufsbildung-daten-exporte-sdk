package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk/go"
	"github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk/go/core"

	vs "github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk/go/utility/struct"
)

func TestBerufsbildungEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Berufsbildung(nil)
		if ent == nil {
			t.Fatal("expected non-nil BerufsbildungEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := berufsbildungBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "berufsbildung." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set BERUFSBILDUNGDATENEXPORTE_TEST_BERUFSBILDUNG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		berufsbildungRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.berufsbildung", setup.data)))
		var berufsbildungRef01Data map[string]any
		if len(berufsbildungRef01DataRaw) > 0 {
			berufsbildungRef01Data = core.ToMapAny(berufsbildungRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = berufsbildungRef01Data

		// LIST
		berufsbildungRef01Ent := client.Berufsbildung(nil)
		berufsbildungRef01Match := map[string]any{}

		berufsbildungRef01ListResult, err := berufsbildungRef01Ent.List(berufsbildungRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, berufsbildungRef01ListOk := berufsbildungRef01ListResult.([]any)
		if !berufsbildungRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", berufsbildungRef01ListResult)
		}

		// LOAD
		berufsbildungRef01MatchDt0 := map[string]any{}
		berufsbildungRef01DataDt0Loaded, err := berufsbildungRef01Ent.Load(berufsbildungRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if berufsbildungRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func berufsbildungBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "berufsbildung", "BerufsbildungTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read berufsbildung test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse berufsbildung test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"berufsbildung01", "berufsbildung02", "berufsbildung03", "export01", "export02", "export03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("BERUFSBILDUNGDATENEXPORTE_TEST_BERUFSBILDUNG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"BERUFSBILDUNGDATENEXPORTE_TEST_BERUFSBILDUNG_ENTID": idmap,
		"BERUFSBILDUNGDATENEXPORTE_TEST_LIVE":      "FALSE",
		"BERUFSBILDUNGDATENEXPORTE_TEST_EXPLAIN":   "FALSE",
		"BERUFSBILDUNGDATENEXPORTE_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["BERUFSBILDUNGDATENEXPORTE_TEST_BERUFSBILDUNG_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["BERUFSBILDUNGDATENEXPORTE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["BERUFSBILDUNGDATENEXPORTE_APIKEY"],
			},
			extra,
		})
		client = sdk.NewBerufsbildungDatenExporteSDK(core.ToMapAny(mergedOpts))
	}

	live := env["BERUFSBILDUNGDATENEXPORTE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["BERUFSBILDUNGDATENEXPORTE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
