import { atom } from "recoil";

export const isMenuOpenedAtom = atom<boolean>({
    key: 'menu-atom',
    default: false
})