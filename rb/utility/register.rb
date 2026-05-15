# BerufsbildungDatenExporte SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

BerufsbildungDatenExporteUtility.registrar = ->(u) {
  u.clean = BerufsbildungDatenExporteUtilities::Clean
  u.done = BerufsbildungDatenExporteUtilities::Done
  u.make_error = BerufsbildungDatenExporteUtilities::MakeError
  u.feature_add = BerufsbildungDatenExporteUtilities::FeatureAdd
  u.feature_hook = BerufsbildungDatenExporteUtilities::FeatureHook
  u.feature_init = BerufsbildungDatenExporteUtilities::FeatureInit
  u.fetcher = BerufsbildungDatenExporteUtilities::Fetcher
  u.make_fetch_def = BerufsbildungDatenExporteUtilities::MakeFetchDef
  u.make_context = BerufsbildungDatenExporteUtilities::MakeContext
  u.make_options = BerufsbildungDatenExporteUtilities::MakeOptions
  u.make_request = BerufsbildungDatenExporteUtilities::MakeRequest
  u.make_response = BerufsbildungDatenExporteUtilities::MakeResponse
  u.make_result = BerufsbildungDatenExporteUtilities::MakeResult
  u.make_point = BerufsbildungDatenExporteUtilities::MakePoint
  u.make_spec = BerufsbildungDatenExporteUtilities::MakeSpec
  u.make_url = BerufsbildungDatenExporteUtilities::MakeUrl
  u.param = BerufsbildungDatenExporteUtilities::Param
  u.prepare_auth = BerufsbildungDatenExporteUtilities::PrepareAuth
  u.prepare_body = BerufsbildungDatenExporteUtilities::PrepareBody
  u.prepare_headers = BerufsbildungDatenExporteUtilities::PrepareHeaders
  u.prepare_method = BerufsbildungDatenExporteUtilities::PrepareMethod
  u.prepare_params = BerufsbildungDatenExporteUtilities::PrepareParams
  u.prepare_path = BerufsbildungDatenExporteUtilities::PreparePath
  u.prepare_query = BerufsbildungDatenExporteUtilities::PrepareQuery
  u.result_basic = BerufsbildungDatenExporteUtilities::ResultBasic
  u.result_body = BerufsbildungDatenExporteUtilities::ResultBody
  u.result_headers = BerufsbildungDatenExporteUtilities::ResultHeaders
  u.transform_request = BerufsbildungDatenExporteUtilities::TransformRequest
  u.transform_response = BerufsbildungDatenExporteUtilities::TransformResponse
}
