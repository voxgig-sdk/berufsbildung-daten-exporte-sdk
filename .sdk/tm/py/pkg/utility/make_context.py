# BerufsbildungDatenExporte SDK utility: make_context

from projectname_sdk.core.context import BerufsbildungDatenExporteContext


def make_context_util(ctxmap, basectx):
    return BerufsbildungDatenExporteContext(ctxmap, basectx)
