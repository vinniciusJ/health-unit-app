import { AxiosError } from "axios"
import { useCallback } from "react"
import { AuthService } from "../services/auth"
import { Credentials } from "../schemas/credentials"
import { healthUnitAPI } from "../services/api"
import { AxiosRequestHeaders } from "axios"
import { useNavigation } from "@react-navigation/native"
import { useRecoilState, useRecoilValue } from "recoil"
import { setAuthorizationTokenInAPI } from "../utils/set-token-in-api"
import { authSelector } from "../contexts/auth"

export const useAuth = () => {
    const [ authToken, setToken ] = useRecoilState(authSelector)

    const navigation = useNavigation()

    const login = useCallback(async (credentials: Credentials) => {
        try{
            const response = await AuthService.signIn(credentials)

            if(response.status === 200){
                setToken(response.data.token)
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
        authToken
    }
}