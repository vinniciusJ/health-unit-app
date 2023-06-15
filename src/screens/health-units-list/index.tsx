import { StackScreenProps } from "@react-navigation/stack";
import { ParamsList } from "../../../App";
import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { Container } from "../../components/container";
import { useHealthUnits } from "../../hooks/use-health-units";
import { HealthUnitPreview } from "../../components/health-unit/preview";
import { styles } from "./style";

type Props = StackScreenProps<ParamsList, 'ubs' | 'upa'>

export const HealthUnitsList: FC<Props> = ({ route }) => {
    const { type } = route.params
    const { healthUnits } = useHealthUnits({ type })

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Todas as {type}'s</Text>

                <View style={styles.list}>
                    {healthUnits.map((healthUnit, index) => (
                        <HealthUnitPreview listItem key={index} {...healthUnit}/>
                    ))}
                </View>
            </ScrollView>
        </Container>
    )
}