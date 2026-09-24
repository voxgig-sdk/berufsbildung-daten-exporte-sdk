
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BerufsbildungDatenExporteSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BerufsbildungDatenExporteSDK.test()
    equal(testsdk instanceof BerufsbildungDatenExporteSDK, true,
      'BerufsbildungDatenExporteSDK.test() must return a client synchronously')
  })

})
