import { useRecoilValue } from "recoil"
import { healthUnitsAtom } from "../contexts/health-units"

export const useHealthUnits = () => {
    const healthUnits = useRecoilValue(healthUnitsAtom)
    
    return {    
        healthUnits
    }
}