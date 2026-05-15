<?php
declare(strict_types=1);

// BerufsbildungDatenExporte SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BerufsbildungDatenExporteMakeContext
{
    public static function call(array $ctxmap, ?BerufsbildungDatenExporteContext $basectx): BerufsbildungDatenExporteContext
    {
        return new BerufsbildungDatenExporteContext($ctxmap, $basectx);
    }
}
