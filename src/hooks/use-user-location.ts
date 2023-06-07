import { useRecoilValue } from 'recoil'
import { userLocation } from '../contexts/user-location'

export const useUserLocation = () => useRecoilValue(userLocation)