# BerufsbildungDatenExporte SDK feature factory

from berufsbildungdatenexporte_sdk.feature.base_feature import BerufsbildungDatenExporteBaseFeature
from berufsbildungdatenexporte_sdk.feature.test_feature import BerufsbildungDatenExporteTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BerufsbildungDatenExporteBaseFeature(),
        "test": lambda: BerufsbildungDatenExporteTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
