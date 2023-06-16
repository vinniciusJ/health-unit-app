import { ParamsList } from "../../App"

export const OPENING_LABELS = ['Fechado', 'Aberto'] as const

export const AUTH_TOKEN = 'auth-token'

export const ROUTES_LABELS: Record<keyof ParamsList, string> = {
    "health-unit": 'a unidade de saúde',
    "my-health-unit": 'o mapa',
    "user-profile": 'o perfil do usuário',
    home: 'o mapa',
    login: 'ao login',
    ubs: 'a listagem das UBSs',
    upa: 'a listagem das UPAs'
}