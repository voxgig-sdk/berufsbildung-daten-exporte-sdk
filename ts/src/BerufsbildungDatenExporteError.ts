
import { Context } from './Context'


class BerufsbildungDatenExporteError extends Error {

  isBerufsbildungDatenExporteError = true

  sdk = 'BerufsbildungDatenExporte'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  BerufsbildungDatenExporteError
}

