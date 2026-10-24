

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BerufsbildungDatenExporteSDK, BaseFeature, config, stdutil } from '../../..'

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


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('berufsbildung hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BerufsbildungDatenExporteSDK.test(offline).Berufsbildung().stream('list')) { }
    }, /offline/)

    for await (const _item of BerufsbildungDatenExporteSDK.test(offline).Berufsbildung()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BerufsbildungDatenExporteSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Berufsbildung().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BerufsbildungDatenExporteSDK.test().Berufsbildung().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BerufsbildungDatenExporteSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Berufsbildung().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Berufsbildung().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BerufsbildungDatenExporteSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Berufsbildung().list({"exclude":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BERUFSBILDUNG_DATEN_EXPORTE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'berufsbildung.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"record":{"a":true,"h":"Record","n":"record","r":false,"t":"`$OBJECT`","key$":"record","index$":0}},"name":"berufsbildung","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /explore/v2.1/catalog/datasets/dek-abb-1/records","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"exclude","or":"exclude","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"de","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"refine","or":"refine","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"select","or":"select","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":"UTC","k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"where","or":"where","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/explore/v2.1/catalog/datasets/dek-abb-1/records","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"explore"},{"lit":"v2.1"},{"lit":"catalog"},{"lit":"datasets"},{"lit":"dek-abb-1"},{"lit":"records"}],"t":{"req":"`reqdata`","res":"`body.records`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"format","or":"format","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":";","k":"query","n":"delimiter","or":"delimiter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"exclude","or":"exclude","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"de","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"refine","or":"refine","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"select","or":"select","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"UTC","k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"where","or":"where","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}","q":{"exist":["format"]},"r":{},"rs":{"alternatives":[{"binary":true,"kind":"raw","media":"application/vnd.ms-excel"},{"binary":true,"kind":"raw","media":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},{"kind":"raw","media":"text/csv"}],"kind":"json","media":"application/json"},"s":[{"lit":"explore"},{"lit":"v2.1"},{"lit":"catalog"},{"lit":"datasets"},{"lit":"dek-abb-1"},{"lit":"exports"},{"var":"format"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"berufsbildung","name__orig":"berufsbildung","Name":"Berufsbildung","name_":"berufsbildung","name-":"berufsbildung","NAME":"BERUFSBILDUNG","index$":0}, {"active":true,"entity":"berufsbildung","key$":"BasicBerufsbildungFlow","kind":"basic","name":"BasicBerufsbildungFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"berufsbildung_ref01"}}],"index$":0},{"a":false,"d":{},"i":{"ref":"berufsbildung_ref01","srcdatavar":"berufsbildung_ref01_data","suffix":"_dt0"},"m":{"id":"berufsbildung01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-berufsbildung_ref01"}}],"unreachable":true}]}, 'Berufsbildung', {"GET /explore/v2.1/catalog/datasets/dek-abb-1/records":{"protocol":"http","parameters":[{"name":"select","in":"query","description":"Liste der zurückzugebenden Felder, durch Komma getrennt","required":false,"schema":{"type":"string"},"index$":0},{"name":"where","in":"query","description":"Filterbedingung für die Abfrage","required":false,"schema":{"type":"string"},"index$":1},{"name":"limit","in":"query","description":"Maximale Anzahl der zurückzugebenden Datensätze","required":false,"schema":{"type":"integer","default":10,"minimum":1,"maximum":100},"index$":2},{"name":"offset","in":"query","description":"Anzahl der zu überspringenden Datensätze für Paginierung","required":false,"schema":{"type":"integer","default":0,"minimum":0},"index$":3},{"name":"order_by","in":"query","description":"Sortierungsfeld und -richtung (z.B. 'jahr DESC')","required":false,"schema":{"type":"string"},"index$":4},{"name":"refine","in":"query","description":"Filterung auf spezifische Werte eines Feldes","required":false,"schema":{"type":"string"},"index$":5},{"name":"exclude","in":"query","description":"Ausschluss spezifischer Werte eines Feldes","required":false,"schema":{"type":"string"},"index$":6},{"name":"lang","in":"query","description":"Sprache für die Antwort (de, en, fr)","required":false,"schema":{"type":"string","enum":["de","en","fr"],"default":"de"},"index$":7},{"name":"timezone","in":"query","description":"Zeitzone für Datumswerte","required":false,"schema":{"type":"string","default":"UTC"},"index$":8}]},"GET /explore/v2.1/catalog/datasets/dek-abb-1/exports/{format}":{"protocol":"http","parameters":[{"name":"format","in":"path","description":"Export-Format","required":true,"schema":{"type":"string","enum":["csv","json","xls","xlsx","geojson","shp"]},"index$":0},{"name":"select","in":"query","description":"Liste der zu exportierenden Felder, durch Komma getrennt","required":false,"schema":{"type":"string"},"index$":1},{"name":"where","in":"query","description":"Filterbedingung für den Export","required":false,"schema":{"type":"string"},"index$":2},{"name":"refine","in":"query","description":"Filterung auf spezifische Werte eines Feldes","required":false,"schema":{"type":"string"},"index$":3},{"name":"exclude","in":"query","description":"Ausschluss spezifischer Werte eines Feldes","required":false,"schema":{"type":"string"},"index$":4},{"name":"lang","in":"query","description":"Sprache für den Export (de, en, fr)","required":false,"schema":{"type":"string","enum":["de","en","fr"],"default":"de"},"index$":5},{"name":"delimiter","in":"query","description":"Trennzeichen für CSV-Export","required":false,"schema":{"type":"string","enum":[",",";","|","\t"],"default":";"},"index$":6},{"name":"timezone","in":"query","description":"Zeitzone für Datumswerte","required":false,"schema":{"type":"string","default":"UTC"},"index$":7}]}}, { strict: LIVE_STRICT, t })
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



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

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
    ['berufsbildung01','berufsbildung02','berufsbildung03'],
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
  
