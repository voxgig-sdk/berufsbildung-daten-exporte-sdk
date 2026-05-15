<?php
declare(strict_types=1);

// BerufsbildungDatenExporte SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class BerufsbildungDatenExporteFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new BerufsbildungDatenExporteBaseFeature();
            case "test":
                return new BerufsbildungDatenExporteTestFeature();
            default:
                return new BerufsbildungDatenExporteBaseFeature();
        }
    }
}
