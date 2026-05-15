# BerufsbildungDatenExporte SDK utility: make_context

from core.context import BerufsbildungDatenExporteContext


def make_context_util(ctxmap, basectx):
    return BerufsbildungDatenExporteContext(ctxmap, basectx)
