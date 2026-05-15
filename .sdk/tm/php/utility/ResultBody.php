<?php
declare(strict_types=1);

// BerufsbildungDatenExporte SDK utility: result_body

class BerufsbildungDatenExporteResultBody
{
    public static function call(BerufsbildungDatenExporteContext $ctx): ?BerufsbildungDatenExporteResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
