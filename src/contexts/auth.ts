import { atom, selector } from "recoil";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUserSession } from "../utils/get-user-session";
import { UserSession } from "../interfaces/user-session";
import { AUTH_TOKEN } from "../utils/consts";

export const tokenSelector = selector({
    key: 'auth-token-selector',
    get: async () => {
        try{
            const response = await getUserSession()

            if(response?.token){
                return response.token
            }
        }
        catch(error){
            console.log(error)
        }

        return ''
    },
    set: ({ set }, newToken) => {
        AsyncStorage.setItem(AUTH_TOKEN, String(newToken))
    }
})

export const userSessionSelector = selector({
    key: 'user-session-selector',
    get: async () => {
        try{
            const userSession = await getUserSession()

            if(userSession){
                return userSession
            }
        }
        catch(error){
            console.log(error)
        }

        return null
    }
})

export const userSessionAtom = atom<UserSession | null>({
    key: 'user-session-atom',
    default: userSessionSelector
})
