import { z } from 'zod'
import { mvnoRestResponse } from "../zodSchemas/apiResponses"

export type MvnoRestResponse = z.infer<typeof mvnoRestResponse>

export type SMSCharge = {
    message_id: string,
    timestamp: string,
    amount: number,
    currency: string,
}

export type InternalApiFormat = {
    telgea_user_id: string,
    msisdn: string,
    usage_data: {
      total_mb: number,
      roaming_mb: number,
      country: string,
      network_type: string,
      provider_code: string,
    },
    sms_charges: SMSCharge[],
    billing_period: {
      start: string,
      end: string,
    }
}