
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BerufsbildungDatenExporteSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BerufsbildungDatenExporteSDK.test()
    equal(null !== testsdk, true)
  })

})
