import { HealthUnitType } from "../schemas/health-unit"

export interface HealthUnitFilter{
    query?: string
    type?: HealthUnitType | Omit<string, HealthUnitType>
}