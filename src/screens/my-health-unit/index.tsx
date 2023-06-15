import { FC, useEffect, useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { withAuthentication } from "../../hocs/with-authentication";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamsList } from "../../../App";
import { useUserSession } from "../../hooks/use-user-session";
import { styles } from "./style";
import { Button } from "../../components/button";
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import Feather from '@expo/vector-icons/Feather'
import { useModal } from "../../hooks/use-modal";
import { Modal } from "../../components/modal";
import { DefineMyHealthUnit } from "../../components/health-unit/define-my-health-unit";
import { useUser } from "../../hooks/use-user";
import { GoBackButton } from "../../components/go-back";

type Props = StackScreenProps<ParamsList, 'my-health-unit'>

const MyHealthUnitScreen: FC<Props> = ({ navigation }) => {
    const { user } = useUser()

    useEffect(() => {
        if(user.healthUnitId){
            navigation.navigate('health-unit', { healthUnitID: user.healthUnitId })
        }
    }, [ user ])


    return (
       <SafeAreaView style={styles.container}>
            <GoBackButton />

            {!user.healthUnitId && (
                <DefineMyHealthUnit userID={user.id}/>
            )}
       </SafeAreaView>
    )
}

export default withAuthentication(MyHealthUnitScreen)