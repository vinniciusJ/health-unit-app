import { useRecoilState, useRecoilValue } from "recoil"
import { isMenuOpenedAtom } from "../contexts/menu"
import { useCallback } from "react"

export const useMenu = () => {
    const [isMenuOpened, setIsMenuOpened] = useRecoilState(isMenuOpenedAtom)

    const toggleMenu = useCallback(() => {
        setIsMenuOpened(current => !current)
    }, [])

    return {
        isMenuOpened,
        toggleMenu
    }
}