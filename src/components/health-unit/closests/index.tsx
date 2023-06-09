import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { HealthUnitPreview } from "../preview";
import { HealthUnit } from "../../../schemas/health-unit";

interface Props{
    healthUnits: HealthUnit[]
}

export const ClosestsHealthUnits: FC<Props> = ({ healthUnits }) => {
    return (
        <View style={styles.closests}>
            <Text>Unidades de saúde mais próximas: </Text>

            <ScrollView 
                horizontal
                contentContainerStyle={styles.scrollable}
            >
                {healthUnits.map((healhtUnit, index) => (
                    <HealthUnitPreview key={index} {...healhtUnit} />
                ))}
            </ScrollView>
        </View>
    )
}