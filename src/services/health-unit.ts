import { AxiosResponse } from "axios";
import { HealthUnit } from "../schemas/health-unit";
import { healthUnitAPi } from "./api";
import { Geolocation } from "../schemas/geolocation";

const RADIUS = 5

export class HealthUnitService {
    getClosests(geolocation: Geolocation): Promise<AxiosResponse<HealthUnit[]>> {
        return healthUnitAPi.get<HealthUnit[]>('/health-unit', { params: { ...geolocation, radius: 1 } })
    }
}

export const getAllHealthUnities = (): Promise<AxiosResponse<HealthUnit[]>> => {
    return healthUnitAPi.get<HealthUnit[]>('/health-unit')
}