<?php
declare(strict_types=1);

// BerufsbildungDatenExporte SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

BerufsbildungDatenExporteUtility::setRegistrar(function (BerufsbildungDatenExporteUtility $u): void {
    $u->clean = [BerufsbildungDatenExporteClean::class, 'call'];
    $u->done = [BerufsbildungDatenExporteDone::class, 'call'];
    $u->make_error = [BerufsbildungDatenExporteMakeError::class, 'call'];
    $u->feature_add = [BerufsbildungDatenExporteFeatureAdd::class, 'call'];
    $u->feature_hook = [BerufsbildungDatenExporteFeatureHook::class, 'call'];
    $u->feature_init = [BerufsbildungDatenExporteFeatureInit::class, 'call'];
    $u->fetcher = [BerufsbildungDatenExporteFetcher::class, 'call'];
    $u->make_fetch_def = [BerufsbildungDatenExporteMakeFetchDef::class, 'call'];
    $u->make_context = [BerufsbildungDatenExporteMakeContext::class, 'call'];
    $u->make_options = [BerufsbildungDatenExporteMakeOptions::class, 'call'];
    $u->make_request = [BerufsbildungDatenExporteMakeRequest::class, 'call'];
    $u->make_response = [BerufsbildungDatenExporteMakeResponse::class, 'call'];
    $u->make_result = [BerufsbildungDatenExporteMakeResult::class, 'call'];
    $u->make_point = [BerufsbildungDatenExporteMakePoint::class, 'call'];
    $u->make_spec = [BerufsbildungDatenExporteMakeSpec::class, 'call'];
    $u->make_url = [BerufsbildungDatenExporteMakeUrl::class, 'call'];
    $u->param = [BerufsbildungDatenExporteParam::class, 'call'];
    $u->prepare_auth = [BerufsbildungDatenExportePrepareAuth::class, 'call'];
    $u->prepare_body = [BerufsbildungDatenExportePrepareBody::class, 'call'];
    $u->prepare_headers = [BerufsbildungDatenExportePrepareHeaders::class, 'call'];
    $u->prepare_method = [BerufsbildungDatenExportePrepareMethod::class, 'call'];
    $u->prepare_params = [BerufsbildungDatenExportePrepareParams::class, 'call'];
    $u->prepare_path = [BerufsbildungDatenExportePreparePath::class, 'call'];
    $u->prepare_query = [BerufsbildungDatenExportePrepareQuery::class, 'call'];
    $u->result_basic = [BerufsbildungDatenExporteResultBasic::class, 'call'];
    $u->result_body = [BerufsbildungDatenExporteResultBody::class, 'call'];
    $u->result_headers = [BerufsbildungDatenExporteResultHeaders::class, 'call'];
    $u->transform_request = [BerufsbildungDatenExporteTransformRequest::class, 'call'];
    $u->transform_response = [BerufsbildungDatenExporteTransformResponse::class, 'call'];
});
