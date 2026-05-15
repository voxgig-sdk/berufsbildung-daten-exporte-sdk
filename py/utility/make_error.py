# BerufsbildungDatenExporte SDK utility: make_error

from __future__ import annotations
from core.operation import BerufsbildungDatenExporteOperation
from core.result import BerufsbildungDatenExporteResult
from core.control import BerufsbildungDatenExporteControl
from core.error import BerufsbildungDatenExporteError


def make_error_util(ctx, err):
    if ctx is None:
        from core.context import BerufsbildungDatenExporteContext
        ctx = BerufsbildungDatenExporteContext({}, None)

    op = ctx.op
    if op is None:
        op = BerufsbildungDatenExporteOperation({})
    opname = op.name
    if opname == "" or opname == "_":
        opname = "unknown operation"

    result = ctx.result
    if result is None:
        result = BerufsbildungDatenExporteResult({})
    result.ok = False

    if err is None:
        err = result.err
    if err is None:
        err = ctx.make_error("unknown", "unknown error")

    errmsg = ""
    if isinstance(err, BerufsbildungDatenExporteError):
        errmsg = err.msg
    elif hasattr(err, "msg") and err.msg is not None:
        errmsg = err.msg
    elif isinstance(err, str):
        errmsg = err
    else:
        errmsg = str(err)

    msg = "BerufsbildungDatenExporteSDK: " + opname + ": " + errmsg
    msg = ctx.utility.clean(ctx, msg)

    result.err = None

    spec = ctx.spec

    if ctx.ctrl.explain is not None:
        ctx.ctrl.explain["err"] = {"message": msg}

    sdk_err = BerufsbildungDatenExporteError("", msg, ctx)
    sdk_err.result = ctx.utility.clean(ctx, result)
    sdk_err.spec = ctx.utility.clean(ctx, spec)

    if isinstance(err, BerufsbildungDatenExporteError):
        sdk_err.code = err.code

    ctx.ctrl.err = sdk_err

    if ctx.ctrl.throw_err is False:
        return result.resdata, None

    return None, sdk_err
