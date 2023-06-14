import { atom, selector } from "recoil";
import { UserSession } from "../interfaces/user-session";
import jwtDecode from "jwt-decode";
import { authAtom } from "./auth";

export const userSessionSelector = selector<UserSession>({
    key: 'user-session-selector',
    get: ({ get }) => {
        try{
            const authToken = get(authAtom)
            const decodedToken = jwtDecode<UserSession>(get(authAtom))

            return { ...decodedToken, token: authToken }
        }
        catch(error){
            console.log(error)
        }

        return {
            id: 0,
            firstName: '',
            lastName: '',
            role: 'USER',
            email: '',
            iat: 0,
            exp: 0,
            token: ''
        }
    }
})
