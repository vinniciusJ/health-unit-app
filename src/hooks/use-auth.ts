import { AxiosError } from "axios"
import { useCallback } from "react"
import { AuthService } from "../services/auth"
import { Credentials } from "../schemas/credentials"
import { healthUnitAPI } from "../services/api"
import { AxiosRequestHeaders } from "axios"
import { useNavigation } from "@react-navigation/native"

export const useAuth = () => {
    const navigation = useNavigation()

    const signIn = useCallback(async (credentials: Credentials) => {
        try{
            const response = await AuthService.signIn(credentials)

            if(response.status === 200){
                healthUnitAPI.interceptors.request.use((config) => {
                    config.headers = {
                        ...config.headers,
                        Authorization: `Bearer ${response.data.token}`
                    } as AxiosRequestHeaders

                    return config
                },
                error => Promise.reject(error))

                navigation.navigate('home' as never)
            }
        }
        catch(error){
            console.log(error as AxiosError)
        }
    }, [])

    return {
        signIn
    }
}