import { User } from "../schemas/user";

export interface UserSession extends User {
    iat: number
    exp: number
    token: string
}