import { AxiosResponse } from "axios";
import { HealthUnit } from "../schemas/health-unit";
import { healthUnitAPi } from "./api";
import { Geolocation } from "../schemas/geolocation";

const RADIUS = 5

export class HealthUnitsService {
    getAll(): Promise<AxiosResponse<HealthUnit[]>>{
        return healthUnitAPi.get<HealthUnit[]>('/health-unit')
    }

    getClosests(geolocation: Geolocation): Promise<AxiosResponse<HealthUnit[]>> {
        return healthUnitAPi.get<HealthUnit[]>('/health-unit/closests', { params: { ...geolocation, radius: RADIUS } })
    }
}