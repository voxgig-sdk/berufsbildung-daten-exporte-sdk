-- BerufsbildungDatenExporte SDK error

local BerufsbildungDatenExporteError = {}
BerufsbildungDatenExporteError.__index = BerufsbildungDatenExporteError


function BerufsbildungDatenExporteError.new(code, msg, ctx)
  local self = setmetatable({}, BerufsbildungDatenExporteError)
  self.is_sdk_error = true
  self.sdk = "BerufsbildungDatenExporte"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BerufsbildungDatenExporteError:error()
  return self.msg
end


function BerufsbildungDatenExporteError:__tostring()
  return self.msg
end


return BerufsbildungDatenExporteError
