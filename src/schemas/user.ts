import { z } from "zod";
import { HealthUnit, healthUnitSchema } from "./health-unit";

export const userSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.literal('USER'),
    email: z.string(),
    healthUnit: healthUnitSchema.optional(),
    healthUnitId: z.number().optional()
})

export interface User extends z.infer<typeof userSchema> {
    healthUnit: HealthUnit
}
