import { FunctionComponent, useEffect } from "react"
import { useAuth } from "../hooks/use-auth"
import { useNavigation } from "@react-navigation/native"
import { getUserSession } from "../utils/get-user-session"
import { setAuthorizationTokenInAPI } from "../utils/set-token-in-api"

/* eslint-disable react/display-name */
export const withAuthentication = <P extends object>(Component: FunctionComponent<P>): React.FC<P> => {
		return ({ ...props }) => {
            const { isSessionExpired } = useAuth()
            const { navigate } = useNavigation()

            useEffect(() => {
                (async () => {
                    const userSession = await getUserSession()

                    setAuthorizationTokenInAPI(String(userSession?.token))
                })()
            }, [])

            useEffect(() => {
                if(isSessionExpired){
                    navigate('login' as never)
                }
            }, [ isSessionExpired ])

			return <Component {...(props as P)} />
		}
	}
