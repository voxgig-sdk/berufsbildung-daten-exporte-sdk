<?php
declare(strict_types=1);

// BerufsbildungDatenExporte SDK exists test

require_once __DIR__ . '/../berufsbildungdatenexporte_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = BerufsbildungDatenExporteSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
