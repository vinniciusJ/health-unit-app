import { AxiosResponse } from "axios";
import { HealthUnit } from "../schemas/health-unit";
import { healthUnitAPI } from "./api";
import { Geolocation } from "../schemas/geolocation";
import { HealthUnitFilter } from "../interfaces/health-unit-filter";

const RADIUS = 2

export class HealthUnitsService {
    filter(params: HealthUnitFilter): Promise<AxiosResponse<HealthUnit[]>>{
        return healthUnitAPI.get<HealthUnit[]>('/health-unit/filter', { params })
    }

    getAll(): Promise<AxiosResponse<HealthUnit[]>>{
        return healthUnitAPI.get<HealthUnit[]>('/health-unit')
    }

    getClosests(geolocation: Geolocation): Promise<AxiosResponse<HealthUnit[]>> {
        return healthUnitAPI.get<HealthUnit[]>('/health-unit/closests', { params: { ...geolocation, radius: RADIUS } })
    }

    getByID(id: number): Promise<AxiosResponse<HealthUnit>> {
        return healthUnitAPI.get<HealthUnit>(`/health-unit/${id}`)
    }
}