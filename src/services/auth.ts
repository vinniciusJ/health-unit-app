import { AxiosResponse } from "axios";
import { healthUnitAPi } from "./api";
import { Credentials } from "../schemas/credentials";

export class AuthService{
    static async signIn(credentials: Credentials): Promise<AxiosResponse<{token: string}>> {
        return healthUnitAPi.post('/auth/sign-in', credentials)
    }
}