import { z } from "zod";

export const geolocationSchema = z.object({
    id: z.number(),
    lat: z.number(),
    long: z.number()
})

export type Geolocation = Omit<z.infer<typeof geolocationSchema>, 'id'>