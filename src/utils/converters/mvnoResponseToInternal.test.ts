import mvnoResponseToInternal from "./mvnoResponseToInternal"
const correctResponse = require('../../mockData/correctMvnoRestResponse.json')
const missingDataResponse = require('../../mockData/missingDataMvnoRestResponse.json')
const incorrectTypeResponse = require('../../mockData/incorrectTypeMvnoRestResponse.json')

test('mvnoResponseToInternal converts, validates and returns data when input is correct', () => {
    expect(mvnoResponseToInternal(correctResponse)).toStrictEqual({
        telgea_user_id: "abc123",
        msisdn: "+46701234567",
        usage_data: {
            total_mb: 845.23,
            roaming_mb: 210.50,
            country: "SE",
            network_type: "4G",
            provider_code: "SE01",
        },
        sms_charges: [],
        billing_period: {
            start: "2025-04-01T00:00:00Z",
            end: "2025-04-30T23:59:59Z",
        }
    })
})

test('mvnoResponseToInternal throws error when input has missing data', () => {
    expect(() => mvnoResponseToInternal(missingDataResponse)).toThrow()
})

test('mvnoResponseToInternal throws error when input has missing data', () => {
    expect(() => mvnoResponseToInternal(incorrectTypeResponse)).toThrow()
})
