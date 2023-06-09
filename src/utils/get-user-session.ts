import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserSession } from "../interfaces/user-session";
import { AUTH_TOKEN } from "./consts";



export const getUserSession = async (): Promise<UserSession | null> => {
    try{
        const token = String(await AsyncStorage.getItem(AUTH_TOKEN))
        
        return { ...jwtDecode<UserSession>(token), token }
    }
    catch(error){
        console.log(error)

        return null
    }
}


            
//             return object.token