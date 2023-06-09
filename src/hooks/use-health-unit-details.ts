import useSWR from "swr"
import { HealthUnitsService } from "../services/health-unit"
import { HealthUnit } from "../schemas/health-unit"

const healthUnitsService = new HealthUnitsService()

const fetchHealthUnitByID = async (id: number) => {
    const response = await healthUnitsService.getByID(id)

    return response.data
}

export const useHealthUnitDetails = (id: number) => {
    const { data } = useSWR(`/${id}`, async () => await fetchHealthUnitByID(id))

    return {
        healthUnit: data as HealthUnit
    }
}