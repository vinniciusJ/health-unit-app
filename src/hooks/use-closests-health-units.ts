import { useRecoilValue } from "recoil"
import { closestsHealthUnitsAtom } from "../contexts/closests-health-units"

export const useClosestsHealthUnits = (lat: number, long: number) => {
    return useRecoilValue(closestsHealthUnitsAtom([ lat, long ]))
}