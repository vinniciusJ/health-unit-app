import { Linking, Platform } from "react-native";
import { Geolocation } from "../schemas/geolocation";

const generateMapURL = ({ lat, long }: Geolocation, plataform: Platform['OS'], ) => {
    return plataform === 'ios' ? `maps://maps.apple.com/?q=${lat},${long}`: `geo:${lat},${long}`
}

export const openOnMaps = async (geolocation: Geolocation) => {
    const mapURL = generateMapURL(geolocation, Platform.OS)

    try{
        Linking.openURL(mapURL)
    }
    catch(error){
        console.log(error)

        throw new Error('Não foi possível abrir no aplication de mapa')
    }
}