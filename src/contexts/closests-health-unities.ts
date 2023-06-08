import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { HealthUnit } from "../schemas/health-unit";
import { HealthUnitService } from "../services/health-unit";
import { AxiosError } from "axios";

const healthUnitiesService = new HealthUnitService()

export const closestsHealthUnitiesSelector = selectorFamily({
    key: 'closests-health-unities-selector',
    get: ([ lat, long ]: number[]) => async () => {
        try{
            const response = await healthUnitiesService.getClosests({ lat, long })

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

export const closestsHealthUnitiesAtom = atomFamily<HealthUnit[], number[]>({
    key: 'closests-health-unities-atom',
    default: closestsHealthUnitiesSelector
})