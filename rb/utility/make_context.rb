# BerufsbildungDatenExporte SDK utility: make_context
require_relative '../core/context'
module BerufsbildungDatenExporteUtilities
  MakeContext = ->(ctxmap, basectx) {
    BerufsbildungDatenExporteContext.new(ctxmap, basectx)
  }
end
