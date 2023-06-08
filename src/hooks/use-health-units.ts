import { useRecoilValue, useSetRecoilState } from "recoil"
import { healhtUnitFilter, healthUnitsAtom } from "../contexts/health-units"
import { useCallback } from "react"
import { HealthUnitFilter } from "../interfaces/health-unit-filter"

export const useHealthUnits = () => {
    const setHealthUnitsFilter = useSetRecoilState(healhtUnitFilter)
    const healthUnits = useRecoilValue(healthUnitsAtom)

    const filterHealthUnits = useCallback((filter: HealthUnitFilter) => setHealthUnitsFilter(filter), [])
    
    return {    
        healthUnits,
        filterHealthUnits
    }
}