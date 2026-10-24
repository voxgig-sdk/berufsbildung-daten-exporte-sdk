# BerufsbildungDatenExporte SDK utility: prepare_body
require_relative 'media'
module BerufsbildungDatenExporteUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return BerufsbildungDatenExporteUtilities.raw_body(ctx.reqdata) if BerufsbildungDatenExporteUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
