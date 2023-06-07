import { Region } from "react-native-maps";

export const getZoomLevel = (region: Region) => {
    const angle = region.longitudeDelta

    return Math.round(Math.log(360 / angle) / Math.LN2)
}