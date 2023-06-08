import { AxiosResponse } from "axios";
import { healthUnitAPI } from "./api";
import { Credentials } from "../schemas/credentials";

export class AuthService{
    static async signIn(credentials: Credentials): Promise<AxiosResponse<{token: string}>> {
        return healthUnitAPI.post('/auth/sign-in', credentials)
    }
}