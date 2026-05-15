<?php
declare(strict_types=1);

// BerufsbildungDatenExporte SDK utility: feature_add

class BerufsbildungDatenExporteFeatureAdd
{
    public static function call(BerufsbildungDatenExporteContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
