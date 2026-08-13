# BerufsbildungDatenExporte SDK exists test

import pytest
from berufsbildungdatenexporte_sdk import BerufsbildungDatenExporteSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BerufsbildungDatenExporteSDK.test(None, None)
        assert testsdk is not None
