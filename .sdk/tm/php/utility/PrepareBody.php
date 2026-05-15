<?php
declare(strict_types=1);

// BerufsbildungDatenExporte SDK utility: prepare_body

class BerufsbildungDatenExportePrepareBody
{
    public static function call(BerufsbildungDatenExporteContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
