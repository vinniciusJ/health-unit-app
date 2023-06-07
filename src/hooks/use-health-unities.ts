import { useRecoilValue } from "recoil"
import { healthUnitiesAtom } from "../contexts/health-unities"

export const useHealthUnities = () => {
    const healthUnities = useRecoilValue(healthUnitiesAtom)
    
    return {    
        healthUnities
    }
}