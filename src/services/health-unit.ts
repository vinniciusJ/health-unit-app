import { AxiosResponse } from "axios";
import { HealthUnit } from "../schemas/health-unit";
import { healthUnitAPi } from "./api";

export const getAllHealthUnities = (): Promise<AxiosResponse<HealthUnit[]>> => {
    return healthUnitAPi.get<HealthUnit[]>('/health-unit')
}