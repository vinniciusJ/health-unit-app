import { FC } from "react";
import { Text, View } from "react-native";

import {styles} from './style'
import { useUserSession } from "../../../hooks/use-user-session";
import { Button } from "../../button";
import Feather from '@expo/vector-icons/Feather';

export const UserPreview: FC = () => {
    const { user } = useUserSession()

    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Text style={styles.initials}>VJ</Text>
            </View>

            <View style={styles.user}>
                <Text style={styles.username}>
                    {user.firstName} {user.lastName}
                </Text>
                
                <Button
                    style={styles.editProfile}
                    textStyle={styles.editProfileText}
                    endIcon={<Feather name="chevron-right" size={14} color="#6c757d" />}
                >
                    Editar perfil
                </Button>
            </View>
        </View>
    )
}