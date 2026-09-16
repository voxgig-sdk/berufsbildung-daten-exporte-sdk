# BerufsbildungDatenExporte SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module BerufsbildungDatenExporteFeatures
  def self.make_feature(name)
    case name
    when "base"
      BerufsbildungDatenExporteBaseFeature.new
    when "ratelimit"
      BerufsbildungDatenExporteRatelimitFeature.new
    when "retry"
      BerufsbildungDatenExporteRetryFeature.new
    when "test"
      BerufsbildungDatenExporteTestFeature.new
    when "timeout"
      BerufsbildungDatenExporteTimeoutFeature.new
    else
      BerufsbildungDatenExporteBaseFeature.new
    end
  end
end
