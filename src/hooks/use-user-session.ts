import { useRecoilValue } from "recoil"
import { userSessionSelector } from "../contexts/user-session"

export const useUserSession = () => {
    const userSession = useRecoilValue(userSessionSelector)

    return {
        userID: userSession.id, 
        expirationTime: userSession.exp
    }
}