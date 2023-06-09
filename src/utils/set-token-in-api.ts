import { AxiosRequestHeaders } from "axios"
import { healthUnitAPI } from "../services/api"

export const setAuthorizationTokenInAPI = (token: string) => {
    healthUnitAPI.interceptors.request.use((config) => {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        } as AxiosRequestHeaders

        return config
    },
    error => Promise.reject(error))
}