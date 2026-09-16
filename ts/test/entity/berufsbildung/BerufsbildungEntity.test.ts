

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BerufsbildungDatenExporteSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('BerufsbildungEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BERUFSBILDUNG_DATEN_EXPORTE_TEST_LIVE=TRUE.
  afterEach(liveDelay('BERUFSBILDUNG_DATEN_EXPORTE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BerufsbildungDatenExporteSDK.test()
    const ent = testsdk.Berufsbildung()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BERUFSBILDUNG_DATEN_EXPORTE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'berufsbildung.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"record","req":false,"type":"`$OBJECT`","index$":0}],"name":"berufsbildung","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"exclude","orig":"exclude","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"de","kind":"query","name":"lang","orig":"lang","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"refine","orig":"refine","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"select","orig":"select","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":"UTC","kind":"query","name":"timezone","orig":"timezone","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"where","orig":"where","reqd":false,"type":"`$STRING`","index$":8}]},"contract":{"id":"GET /explore/v2.1/catalog/datasets/dek-abb-1/records","json":"{\"operationId\":\"getBerufsbildungRecords\",\"parameters\":[{\"description\":\"Liste der zurückzugebenden Felder, durch Komma getrennt\",\"in\":\"query\",\"name\":\"select\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filterbedingung für die Abfrage\",\"in\":\"query\",\"name\":\"where\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Maximale Anzahl der zurückzugebenden Datensätze\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Anzahl der zu überspringenden Datensätze für Paginierung\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Sortierungsfeld und -richtung (z.B. 'jahr DESC')\",\"in\":\"query\",\"name\":\"order_by\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filterung auf spezifische Werte eines Feldes\",\"in\":\"query\",\"name\":\"refine\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Ausschluss spezifischer Werte eines Feldes\",\"in\":\"query\",\"name\":\"exclude\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Sprache für die Antwort (de, en, fr)\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"de\",\"enum\":[\"de\",\"en\",\"fr\"],\"type\":\"string\"}},{\"description\":\"Zeitzone für Datumswerte\",\"in\":\"query\",\"name\":\"timezone\",\"required\":false,\"schema\":{\"default\":\"UTC\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"records\":{\"items\":{\"properties\":{\"record\":{\"properties\":{\"fields\":{\"description\":\"Datenfelder mit Informationen zu Lehrverträgen und Abschlüssen\",\"properties\":{\"abschluesse_qualifikationsverfahren\":{\"description\":\"Anzahl der Abschlüsse der Qualifikationsverfahren (Lehrabschlussprüfungen)\",\"type\":\"integer\"},\"anzahl_lehrvertraege_total\":{\"description\":\"Totale Anzahl der Lehrverträge\",\"type\":\"integer\"},\"attestausweise\":{\"description\":\"Anzahl ausgestellte Attestausweise (Wert -99 bedeutet aus Datenschutzgründen nicht veröffentlicht)\",\"type\":\"integer\"},\"ausbildungsfeld\":{\"description\":\"Ausbildungsfeld oder Berufsgruppe\",\"type\":\"string\"},\"durchgefuehrte_qualifikationsverfahren\":{\"description\":\"Anzahl durchgeführte Qualifikationsverfahren\",\"type\":\"integer\"},\"faehigkeitsausweise\":{\"description\":\"Anzahl ausgestellte Fähigkeitsausweise\",\"type\":\"integer\"},\"jahr\":{\"description\":\"Berichtsjahr\",\"type\":\"integer\"},\"neu_registrierte_lehrvertraege\":{\"description\":\"Anzahl der neu registrierten Lehrverträge\",\"type\":\"integer\"},\"repetenten\":{\"description\":\"Anzahl Repetenten (Wert -99 bedeutet aus Datenschutzgründen nicht veröffentlicht)\",\"type\":\"integer\"}},\"type\":\"object\"},\"id\":{\"description\":\"Eindeutige ID des Datensatzes\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Zeitstempel der letzten Änderung\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_count\":{\"description\":\"Gesamtanzahl der verfügbaren Datensätze\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Erfolgreiche Antwort mit Berufsbildungsdaten\"},\"400\":{\"description\":\"Ungültige Anfrage\"},\"404\":{\"description\":\"Dataset nicht gefunden\"},\"500\":{\"description\":\"Interner Serverfehler\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/explore/v2.1/catalog/datasets/dek-abb-1/records","segments":[{"lit":"explore"},{"lit":"v2.1"},{"lit":"catalog"},{"lit":"datasets"},{"lit":"dek-abb-1"},{"lit":"records"}],"select":{"exist":["exclude","lang","limit","offset","order_by","refine","select","timezone","where"]},"transform":{"req":"`reqdata`","res":"`body.records`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"format","orig":"format","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":";","kind":"query","name":"delimiter","orig":"delimiter","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"exclude","orig":"exclude","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"de","kind":"query","name":"lang","orig":"lang","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"refine","orig":"refine","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"select","orig":"select","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":"UTC","kind":"query","name":"timezone","orig":"timezone","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"where","orig":"where","reqd":false,"type":"`$STRING`","index$":6}]},"contract":{"id":"GET /explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}","json":"{\"operationId\":\"exportBerufsbildungData\",\"parameters\":[{\"description\":\"Export-Format\",\"in\":\"path\",\"name\":\"format\",\"required\":true,\"schema\":{\"enum\":[\"csv\",\"json\",\"xls\",\"xlsx\",\"geojson\",\"shp\"],\"type\":\"string\"}},{\"description\":\"Liste der zu exportierenden Felder, durch Komma getrennt\",\"in\":\"query\",\"name\":\"select\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filterbedingung für den Export\",\"in\":\"query\",\"name\":\"where\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filterung auf spezifische Werte eines Feldes\",\"in\":\"query\",\"name\":\"refine\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Ausschluss spezifischer Werte eines Feldes\",\"in\":\"query\",\"name\":\"exclude\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Sprache für den Export (de, en, fr)\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"de\",\"enum\":[\"de\",\"en\",\"fr\"],\"type\":\"string\"}},{\"description\":\"Trennzeichen für CSV-Export\",\"in\":\"query\",\"name\":\"delimiter\",\"required\":false,\"schema\":{\"default\":\";\",\"enum\":[\",\",\";\",\"|\",\"\\t\"],\"type\":\"string\"}},{\"description\":\"Zeitzone für Datumswerte\",\"in\":\"query\",\"name\":\"timezone\",\"required\":false,\"schema\":{\"default\":\"UTC\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\"}},\"application/vnd.ms-excel\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"text/csv\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Erfolgreicher Export der Daten\"},\"400\":{\"description\":\"Ungültige Anfrage oder ungültiges Format\"},\"404\":{\"description\":\"Dataset nicht gefunden\"},\"500\":{\"description\":\"Interner Serverfehler\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}","segments":[{"lit":"explore"},{"lit":"v2.1"},{"lit":"catalog"},{"lit":"datasets"},{"lit":"dek-abb-1"},{"lit":"exports"},{"var":"format"}],"select":{"exist":["delimiter","exclude","format","lang","refine","select","timezone","where"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["export"]]},"key$":"berufsbildung","name__orig":"berufsbildung","Name":"Berufsbildung","name_":"berufsbildung","name-":"berufsbildung","NAME":"BERUFSBILDUNG","index$":0}, {"active":true,"entity":"berufsbildung","key$":"BasicBerufsbildungFlow","kind":"basic","name":"BasicBerufsbildungFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"berufsbildung_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"berufsbildung_ref01","srcdatavar":"berufsbildung_ref01_data","suffix":"_dt0"},"match":{"id":"berufsbildung01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-berufsbildung_ref01"}}],"index$":1}]}, 'Berufsbildung')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let berufsbildung_ref01_data = Object.values(setup.data.existing.berufsbildung)[0] as any

    // LIST
    const berufsbildung_ref01_ent = client.Berufsbildung()
    const berufsbildung_ref01_match: any = {}

    const berufsbildung_ref01_list = (await berufsbildung_ref01_ent.list(berufsbildung_ref01_match)).map((e: any) => e.data())



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/berufsbildung/BerufsbildungTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BerufsbildungDatenExporteSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['berufsbildung01','berufsbildung02','berufsbildung03','export01','export02','export03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BERUFSBILDUNG_DATEN_EXPORTE_TEST_BERUFSBILDUNG_ENTID': idmap,
    'BERUFSBILDUNG_DATEN_EXPORTE_TEST_LIVE': 'FALSE',
    'BERUFSBILDUNG_DATEN_EXPORTE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BERUFSBILDUNG_DATEN_EXPORTE_TEST_BERUFSBILDUNG_ENTID']

  const live = 'TRUE' === env.BERUFSBILDUNG_DATEN_EXPORTE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BERUFSBILDUNG_DATEN_EXPORTE_TEST_BERUFSBILDUNG_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BerufsbildungDatenExporteSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BERUFSBILDUNG_DATEN_EXPORTE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
