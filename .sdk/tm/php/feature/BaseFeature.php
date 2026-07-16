<?php
declare(strict_types=1);

// BerufsbildungDatenExporte SDK base feature

class BerufsbildungDatenExporteBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BerufsbildungDatenExporteContext $ctx, array $options): void {}
    public function PostConstruct(BerufsbildungDatenExporteContext $ctx): void {}
    public function PostConstructEntity(BerufsbildungDatenExporteContext $ctx): void {}
    public function SetData(BerufsbildungDatenExporteContext $ctx): void {}
    public function GetData(BerufsbildungDatenExporteContext $ctx): void {}
    public function GetMatch(BerufsbildungDatenExporteContext $ctx): void {}
    public function SetMatch(BerufsbildungDatenExporteContext $ctx): void {}
    public function PrePoint(BerufsbildungDatenExporteContext $ctx): void {}
    public function PreSpec(BerufsbildungDatenExporteContext $ctx): void {}
    public function PreRequest(BerufsbildungDatenExporteContext $ctx): void {}
    public function PreResponse(BerufsbildungDatenExporteContext $ctx): void {}
    public function PreResult(BerufsbildungDatenExporteContext $ctx): void {}
    public function PreDone(BerufsbildungDatenExporteContext $ctx): void {}
    public function PreUnexpected(BerufsbildungDatenExporteContext $ctx): void {}
}
