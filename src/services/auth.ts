import { AxiosResponse } from "axios";
import { healthUnitAPI } from "./api";
import { Credentials } from "../schemas/credentials";
import { User } from "../schemas/user";

export class AuthService{
    static async signIn(credentials: Credentials): Promise<AxiosResponse<{token: string}>> {
        return healthUnitAPI.post('/auth/sign-in', credentials)
    }

    static signUp(user: User): Promise<AxiosResponse<{token: string}>>{
        return healthUnitAPI.post('/auth/sign-up', user)
    }
}