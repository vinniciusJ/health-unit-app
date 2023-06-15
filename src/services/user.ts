import { AxiosResponse } from "axios";
import { healthUnitAPI } from "./api";

export class UsersService {
    defineUserHealthUnit(userID: number, healthUnitID: number): Promise<AxiosResponse> {
        return healthUnitAPI.put(`/user/${userID}/change-health-unit/${healthUnitID}`)
    }
}