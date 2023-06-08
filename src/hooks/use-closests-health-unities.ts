import { useRecoilValue } from "recoil"
import { closestsHealthUnitiesAtom } from "../contexts/closests-health-unities"

export const useClosestsHealthUnities = (lat: number, long: number) => {
    return useRecoilValue(closestsHealthUnitiesAtom([ lat, long ]))
}