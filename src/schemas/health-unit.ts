import { z } from "zod";
import { addressSchema } from "./address";
import { geolocationSchema } from "./geolocation";
import { OpeningHours } from "../interfaces/opening-hours";

const HEALTH_UNIT_TYPES = ['UPA', 'UBS'] as const

const OPENING_HOURS_REGEX = /(\d+):(\d+) - (\d+):(\d+)/

export const healthUnitSchema = z.object({
    id: z.number(),
    name: z.string(),
    type: z.enum(HEALTH_UNIT_TYPES),
    phone: z.string(),
    imageURL: z.string(),
    openingHours: z.string().refine(data => OPENING_HOURS_REGEX.test(data)),
    addressId: z.number(),
    geolocationId: z.number(),
    address: addressSchema,
    geolocation: geolocationSchema
})

export interface HealthUnit extends Omit<z.infer<typeof healthUnitSchema>, 'openingHours'>{
    openingHours: OpeningHours
}

export type HealthUnitType = HealthUnit['type']
