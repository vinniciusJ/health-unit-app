import { z } from "zod";

export const addressSchema = z.object({
    id: z.number(),
    street: z.string(),
    number: z.number(),
    neighborhood: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    zipCode: z.string()
})

export type Address = z.infer<typeof addressSchema>