import { FC } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import { View } from "react-native";
import { Button } from "../button";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export const GoBackButton: FC = () => {
    const { navigate } = useNavigation()
    return (
        <View>
            <Button
                startIcon={<FontAwesome name="arrow-left" size={24} color="black" />}
                style={styles.goBack}
                textStyle={styles.goBackTitle}
                onPress={() => navigate('home' as never)}
            >
                Voltar para o mapa
            </Button>
        </View>
    )
}