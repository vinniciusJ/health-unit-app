import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { useFormContext } from 'react-hook-form'
import { useHealthUnits } from "../../../hooks/use-health-units";
import { HealthUnitFilter } from "../../../interfaces/health-unit-filter";
import { addressToString } from "../../../utils/address-to-string";
import { HighlightText } from "../../highlight-text";
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { styles } from "./style";
import { HealthUnitType } from "../../../schemas/health-unit";

const ICON_COLOR: Record<HealthUnitType, string> = {
    UBS: 'green',
    UPA: 'red'
}

export const HealthUnitsList: FC = () => {
    const { healthUnits } = useHealthUnits()
    const { watch } = useFormContext<HealthUnitFilter>()

    const query = watch('query')

    return (
        <ScrollView style={styles.list}>
            {healthUnits.map((healthUnit, index) => (
                <View key={index} style={styles.listItem}>
                    <FontAwesome 
                        name="hospital" 
                        size={28} 
                        color={ICON_COLOR[healthUnit.type]} 
                    />
                    <View>  
                        <HighlightText search={query ?? ''}>
                            {healthUnit.name}
                        </HighlightText>
                        <HighlightText search={query ?? ''}>
                            {addressToString(healthUnit.address)}
                        </HighlightText>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}