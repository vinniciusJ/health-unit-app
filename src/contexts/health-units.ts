import { atom, selector } from "recoil";
import { HealthUnit } from "../schemas/health-unit";
import { HealthUnitsService } from "../services/health-unit";
import { AxiosError } from "axios";

const healthUnitsService = new HealthUnitsService()

export const healthUnitsSelector = selector({
    key: 'health-units-selector',
    get: async () => {
        try{
            const response = await healthUnitsService.getAll()

            if(response.status === 200){
                return response.data
            }

            return []
        }
        catch(error){
            console.log(error as AxiosError)
            return []
        }
    }
})

export const healthUnitsAtom = atom<HealthUnit[]>({
    key: 'health-units',
    default: healthUnitsSelector
})
