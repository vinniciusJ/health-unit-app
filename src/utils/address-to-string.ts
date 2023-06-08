import { Address } from "../schemas/address";

export const addressToString = ({ city, country, neighborhood, number, state, street, zipCode }: Address) => {
    return `${street}, ${number}, ${neighborhood}, ${zipCode} - ${city}/${state}, ${country}`
}