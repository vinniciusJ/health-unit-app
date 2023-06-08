import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { useUserLocation } from "../../../hooks/use-user-location";
import { useClosestsHealthUnits } from "../../../hooks/use-closests-health-units";
import { styles } from "./styles";
import { HealthUnitPreview } from "../preview";

export const ClosestsHealthUnits: FC = () => {
    const userLocation = useUserLocation()
    const closestsHealthUnits = useClosestsHealthUnits(userLocation.latitude, userLocation.longitude)

    return (
        <View style={styles.closests}>
            <Text>Unidades de saúde mais próximas: </Text>

            <ScrollView 
                horizontal
                contentContainerStyle={styles.scrollable}
            >
                {closestsHealthUnits.map((healhtUnit, index) => (
                    <HealthUnitPreview key={index} {...healhtUnit} />
                ))}
            </ScrollView>
        </View>
    )
}