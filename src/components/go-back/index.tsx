import { FC, useMemo } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import { View } from "react-native";
import { Button } from "../button";
import { styles } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ROUTES_LABELS } from "../../utils/consts";
import { ParamsList } from "../../../App";

export const GoBackButton: FC = () => {
    const { goBack, getState, navigate } = useNavigation()

    const previousPage = useMemo(() => {
        const routes = getState().routes

        return (routes.at(-2)?.name ?? 'home') as keyof ParamsList
    }, [ ])

    return (
        <View>
            <Button
                startIcon={<FontAwesome name="arrow-left" size={24} color="black" />}
                style={styles.goBack}
                textStyle={styles.goBackTitle}
                onPress={() => previousPage === 'my-health-unit' ? navigate('home' as never) : goBack()}
            >
                {String(`Voltar para ${ROUTES_LABELS[previousPage]}`)}
            </Button>
        </View>
    )
}