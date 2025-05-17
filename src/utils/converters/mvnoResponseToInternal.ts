import { type InternalApiFormat, type MvnoRestResponse } from "../../types/Api"
import { MvnoRestResponseSchema } from "../../zodSchemas/apiResponses"

const mvnoResponseToInternal = (response: MvnoRestResponse): InternalApiFormat => {
    
    // Zod is used to validate data in response, if data does not validate correctly an error is thrown

    MvnoRestResponseSchema.parse(response)
    
    const internalApiObj: InternalApiFormat = {
        telgea_user_id: response.user_id,
        msisdn: response.msisdn,
        usage_data: {
            total_mb: response.usage.data.total_mb,
            roaming_mb: response.usage.data.roaming_mb,
            country: response.usage.data.country,
            network_type: response.network.type,
            provider_code: response.network.provider_code,
        },
        sms_charges: [],
        billing_period: {
            start: response.usage.period.start,
            end: response.usage.period.end,
        }
    }

    return internalApiObj
}

export default mvnoResponseToInternal