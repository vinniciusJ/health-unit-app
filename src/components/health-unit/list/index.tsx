import { FC, useCallback } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useFormContext } from 'react-hook-form'
import { useHealthUnits } from "../../../hooks/use-health-units";
import { HealthUnitFilter } from "../../../interfaces/health-unit-filter";
import { addressToString } from "../../../utils/address-to-string";
import { HighlightText } from "../../highlight-text";
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { styles } from "./style";
import { HealthUnit, HealthUnitType } from "../../../schemas/health-unit";
import { useNavigation } from "@react-navigation/native";

const ICON_COLOR: Record<HealthUnitType, string> = {
    UBS: 'green',
    UPA: 'red'
}

interface Props{
    healthUnits: HealthUnit[]
}

export const HealthUnitsList: FC<Props> = ({ healthUnits }) => {
    const { watch } = useFormContext<HealthUnitFilter>()

    const { navigate } = useNavigation()

    const query = watch('query')

    const handleHealthUnitClick = useCallback((id: number) => {
        navigate('health-unit' as never, { healthUnitID: id } as never)
    }, [ ])

    return (
        <ScrollView 
            style={styles.list}
            showsVerticalScrollIndicator={false}    
        >
            {healthUnits.map((healthUnit, index) => (
                <TouchableOpacity 
                    key={index}  
                    onPress={() => handleHealthUnitClick(healthUnit.id)}
                >
                    <View style={styles.listItem}>
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
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}