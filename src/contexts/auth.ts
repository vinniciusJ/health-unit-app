import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from "recoil";

export const authAtom = atom<string>({
    key: 'auth-atom',
    default: ''
})

