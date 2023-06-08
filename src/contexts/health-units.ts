import { atom, selector } from "recoil";
import { HealthUnit } from "../schemas/health-unit";
import { HealthUnitsService } from "../services/health-unit";
import { AxiosError } from "axios";
import { HealthUnitFilter } from "../interfaces/health-unit-filter";

const healthUnitsService = new HealthUnitsService()

export const healthUnitsSelector = selector({
    key: 'health-units-selector',
    get: async ({ get }) => {
        const filter = get(healhtUnitFilter)

        try{
            const response = await healthUnitsService.filter(filter)

            if(response.status === 200){
                return response.data
            }

            return []
        }
        catch(error){
            console.log(error as AxiosError )
            return []
        }
    }
})

export const healhtUnitFilter = atom<HealthUnitFilter>({
    key: 'healh-unit-filter',
    default: {}
})

export const healthUnitsAtom = atom<HealthUnit[]>({
    key: 'health-units',
    default: healthUnitsSelector
})
