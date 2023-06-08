import { FC } from "react";
import { Text, View } from "react-native";
import { useFormContext } from 'react-hook-form'
import { useHealthUnits } from "../../../hooks/use-health-units";
import { HealthUnitFilter } from "../../../interfaces/health-unit-filter";
import { addressToString } from "../../../utils/address-to-string";
import { HighlightText } from "../../highlight-text";

export const HealthUnitsList: FC = () => {
    const { healthUnits } = useHealthUnits()
    const { watch } = useFormContext<HealthUnitFilter>()

    const query = watch('query')

    return (
        <View>
            {healthUnits.map((healthUnit, index) => (
                <View key={index}>
                    <HighlightText search={query ?? ''}>
                        {healthUnit.name}
                    </HighlightText>
                    <HighlightText search={query ?? ''}>
                        {addressToString(healthUnit.address)}
                    </HighlightText>
                </View>
            ))}
        </View>
    )
}