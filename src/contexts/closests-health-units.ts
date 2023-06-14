import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { HealthUnit } from "../schemas/health-unit";
import { HealthUnitsService } from "../services/health-unit";
import { AxiosError } from "axios";

const healthUnitsService = new HealthUnitsService()

export const closestsHealthUnitsSelector = selectorFamily({
    key: 'closests-health-units-selector',
    get: ([ lat, long ]: number[]) => async () => {
        try{
            const response = await healthUnitsService.getClosests({ lat, long })

            if(response.status == 200){
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

export const closestsHealthUnitsAtom = atomFamily<HealthUnit[], number[]>({
    key: 'closests-health-units-atom',
    default: closestsHealthUnitsSelector
})