import { useRecoilValue, useSetRecoilState } from "recoil"
import { healhtUnitFilter, healthUnitsAtom } from "../contexts/health-units"
import { useCallback, useEffect } from "react"
import { HealthUnitFilter } from "../interfaces/health-unit-filter"
import { useUserLocation } from "./use-user-location"
import { closestsHealthUnitsAtom } from "../contexts/closests-health-units"

export const useHealthUnits = (filter?: HealthUnitFilter) => {
    const userLocation = useUserLocation()

    const setHealthUnitsFilter = useSetRecoilState(healhtUnitFilter)
    const healthUnits = useRecoilValue(healthUnitsAtom)
    const closestsHealthUnits = useRecoilValue(closestsHealthUnitsAtom([ userLocation.latitude, userLocation.longitude ]))

    const filterHealthUnits = useCallback((filter: HealthUnitFilter) => setHealthUnitsFilter(filter), [])
    
    useEffect(() => {
        if(filter){
            filterHealthUnits(filter)
        }
    }, [ filter ])

    return {    
        healthUnits,
        filterHealthUnits,
        closestsHealthUnits,
    }
}