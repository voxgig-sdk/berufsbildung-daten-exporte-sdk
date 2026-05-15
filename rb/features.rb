# BerufsbildungDatenExporte SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module BerufsbildungDatenExporteFeatures
  def self.make_feature(name)
    case name
    when "base"
      BerufsbildungDatenExporteBaseFeature.new
    when "test"
      BerufsbildungDatenExporteTestFeature.new
    else
      BerufsbildungDatenExporteBaseFeature.new
    end
  end
end
