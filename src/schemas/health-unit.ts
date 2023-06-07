import { z } from "zod";
import { addressSchema } from "./address";
import { geolocationSchema } from "./geolocation";

const HEALTH_UNIT_TYPES = ['UPA', 'UBS'] as const

export const healthUnitSchema = z.object({
    id: z.number(),
    name: z.string(),
    type: z.enum(HEALTH_UNIT_TYPES),
    phone: z.string(),
    opening_hours: z.string(),
    addressId: z.number(),
    geolocationId: z.number(),
    address: addressSchema,
    geolocation: geolocationSchema
})

export type HealthUnit = z.infer<typeof healthUnitSchema>