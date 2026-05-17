package voxgigberufsbildungdatenexportesdk

import (
	"github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk/go/core"
	"github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk/go/entity"
	"github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk/go/feature"
	_ "github.com/voxgig-sdk/berufsbildung-daten-exporte-sdk/go/utility"
)

// Type aliases preserve external API.
type BerufsbildungDatenExporteSDK = core.BerufsbildungDatenExporteSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type BerufsbildungDatenExporteEntity = core.BerufsbildungDatenExporteEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type BerufsbildungDatenExporteError = core.BerufsbildungDatenExporteError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBerufsbildungEntityFunc = func(client *core.BerufsbildungDatenExporteSDK, entopts map[string]any) core.BerufsbildungDatenExporteEntity {
		return entity.NewBerufsbildungEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewBerufsbildungDatenExporteSDK = core.NewBerufsbildungDatenExporteSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
