-- ProjectName SDK exists test

local sdk = require("berufsbildung-daten-exporte_sdk")

describe("BerufsbildungDatenExporteSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
