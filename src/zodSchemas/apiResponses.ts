import { z } from 'zod'

export const mvnoRestResponse = z.object({
    user_id: z.string(),
    msisdn: z.string(),
    usage: z.object({
        data: z.object({
            total_mb: z.number(),
            roaming_mb: z.number(),
            country: z.string(),
        }),
        period: z.object({
            start: z.string().datetime(),
            end: z.string().datetime(),
        })
    }), 
    network: z.object({
        type: z.string(),
        provider_code: z.string()
    }), 
})