import { Linking } from "react-native"
import { z } from "zod"

const phoneNumberSchema = z.string().regex(/^\+?\d{1,}$/)

export const call = async (phoneNumber: string) => {
    try{
        phoneNumberSchema.parse(phoneNumber)

        Linking.openURL(`tel:${phoneNumber}`)
    }
    catch{
        throw new Error('N° de telefone inválido')
    }
}