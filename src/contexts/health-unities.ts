import { atom, selector } from "recoil";
import { HealthUnit } from "../schemas/health-unit";
import { getAllHealthUnities } from "../services/health-unit";

export const healthUnitiesSelector = selector({
    key: 'health-unities-selector',
    get: async () => {
        try{
            const response = await getAllHealthUnities()

            if(response.status === 200){
                return response.data
            }

            return []
        }
        catch(error){
            console.log(error)
            return []
        }
    }
})

export const healthUnitiesAtom = atom<HealthUnit[]>({
    key: 'health-unities',
    default: healthUnitiesSelector
})
