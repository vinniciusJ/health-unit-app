import { AxiosResponse } from "axios";
import { healthUnitAPI } from "./api";
import { User } from "../schemas/user";

export class UsersService {
    getByID(id: number): Promise<AxiosResponse<User>> {
        return healthUnitAPI.get<User>(`/user/${id}`)
    }

    defineUserHealthUnit(userID: number, healthUnitID: number): Promise<AxiosResponse> {
        return healthUnitAPI.put(`/user/${userID}/change-health-unit/${healthUnitID}`)
    }
}