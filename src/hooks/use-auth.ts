import { AxiosError } from "axios"
import { useCallback, useEffect, useMemo } from "react"
import { AuthService } from "../services/auth"
import { Credentials } from "../schemas/credentials"
import { healthUnitAPI } from "../services/api"
import { AxiosRequestHeaders } from "axios"
import { useNavigation } from "@react-navigation/native"
import { useRecoilState, useRecoilValue } from "recoil"
import { setAuthorizationTokenInAPI } from "../utils/set-token-in-api"
import { authAtom } from "../contexts/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { userSessionSelector } from "../contexts/user-session"


export const useAuth = () => {
    const [ authToken, setAuthToken ] = useRecoilState(authAtom)
    const userSession = useRecoilValue(userSessionSelector)

    const isSessionExpired = useMemo(() => {
        return !userSession || userSession.exp < (new Date().getTime() + 1) / 1000
    }, [ userSession ])
    
    const navigation = useNavigation()

    const login = useCallback(async (credentials: Credentials) => {
        try{
            const response = await AuthService.signIn(credentials)

            if(response.status === 200){
                setAuthToken(response.data.token)
                setAuthorizationTokenInAPI(response.data.token)

                navigation.navigate('home' as never)
            }
        }
        catch(error){
            console.log(error as AxiosError)
        }
    }, [])

    
    return {
        signIn: login,
        setAuthToken,
        authToken,
        isSessionExpired,
        userSession
    }
}