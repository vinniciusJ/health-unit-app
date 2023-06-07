import { atom, selector } from 'recoil'
import * as Location from 'expo-location'

export const userLocationSelector = selector({
    key: 'user-location-selector',
    get: async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()

        if(status !== 'granted'){
            return {
                latitude: -25.4636316,
                longitude: -54.5853089
            }
        }

        const { coords } = await Location.getCurrentPositionAsync({})

        return { ...coords }
    }
})

export const userLocation = atom({
    key: 'user-location',
    default: userLocationSelector
})