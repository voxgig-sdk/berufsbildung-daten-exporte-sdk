"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerufsbildungDatenExporteError = void 0;
class BerufsbildungDatenExporteError extends Error {
    isBerufsbildungDatenExporteError = true;
    sdk = 'BerufsbildungDatenExporte';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.BerufsbildungDatenExporteError = BerufsbildungDatenExporteError;
//# sourceMappingURL=BerufsbildungDatenExporteError.js.map