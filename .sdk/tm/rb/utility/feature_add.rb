# BerufsbildungDatenExporte SDK utility: feature_add
module BerufsbildungDatenExporteUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
