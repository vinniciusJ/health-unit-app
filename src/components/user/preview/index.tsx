import { FC } from "react";
import { Text, View } from "react-native";

import {styles} from './style'
import { Button } from "../../button";
import Feather from '@expo/vector-icons/Feather';
import { useUser } from "../../../hooks/use-user";
import { generateAvatarFromInitials } from "../../../utils/generate-avatar-from-initials";
import { useNavigation } from "@react-navigation/native";

export const UserPreview: FC = () => {
    const { navigate } = useNavigation()
    const { user } = useUser()

    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Text style={styles.initials}>{user ? generateAvatarFromInitials(user) : 'AA'}</Text>
            </View>

            <View style={styles.user}>
                <Text style={styles.username}>
                    {user.firstName} {user.lastName}
                </Text>
                
                <Button
                    style={styles.editProfile}
                    textStyle={styles.editProfileText}
                    onPress={() => navigate('user-profile' as never)}
                    endIcon={<Feather name="chevron-right" size={14} color="#6c757d" />}
                >
                    Editar perfil
                </Button>
            </View>
        </View>
    )
}