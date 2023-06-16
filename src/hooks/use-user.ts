import { useRecoilState } from "recoil"
import { useUserSession } from "./use-user-session"
import { userAtom } from "../contexts/user"
import { UsersService } from "../services/user"
import { useCallback } from "react"
import { HealthUnitsService } from "../services/health-unit"
import { User } from "../schemas/user"

const usersService = new UsersService()
const healthUnitsService = new HealthUnitsService()

export const useUser = () => {
    const { userID } = useUserSession()
    const [ user, setUser ] = useRecoilState(userAtom(userID))

    const defineUserUBS = useCallback(async (healthUnitID: number) => {
        try {
            const response = await usersService.defineUserHealthUnit(user.id, healthUnitID)

            if(response.status === 204){
                const { data } = await healthUnitsService.getByID(healthUnitID)

                setUser({
                    ...user,
                    healthUnitId: healthUnitID,
                    healthUnit: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }, [ user ])

    const editUser = useCallback(async (id: number, user: User) => {
    
        try{
            const response = await usersService.updateUser(id, user)

            if(response.status === 204){
                const { data } = await healthUnitsService.getByID(Number(user.healthUnitId))

                setUser({
                    ...user,
                    healthUnitId: Number(user.healthUnitId),
                    healthUnit: data
                })
            }
        }
        catch(error){
            console.log(error)
        }
    }, [])

    return {
        user,
        defineUserUBS,
        editUser
    }
}