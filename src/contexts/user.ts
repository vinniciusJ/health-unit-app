import { atomFamily, selectorFamily } from "recoil";
import { User } from "../schemas/user";
import { UsersService } from "../services/user";

const usersService = new UsersService()

export const userSelector = selectorFamily({
    key: 'user-selector',
    get: (id: number) => async () => {
        try{
            const response = await usersService.getByID(id)

            if(response.status === 200){
                return response.data
            }
        }
        catch(error){
            console.log(error)
        }

        return {} as User
    },
})

export const userAtom = atomFamily<User, number>({
    key: 'user-atom',
    default: userSelector
})