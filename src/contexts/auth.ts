import AsyncStorage from "@react-native-async-storage/async-storage";
import {  selector } from "recoil";
import { AUTH_TOKEN } from "../utils/consts";

export const authSelector = selector<string>({
    key: 'auth-selector',
    get: async () => {
        try{
            console.log(String(await AsyncStorage.getItem(AUTH_TOKEN))) 

            return ''
        }
        catch(error){
            console.log(error)
        }

        return ''
    },
    set: ({ set }, authToken) => {
        AsyncStorage.setItem(AUTH_TOKEN, String(authToken))
    }
})

