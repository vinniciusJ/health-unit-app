import { RouteProp } from "@react-navigation/native";
import { FC } from "react";
import { SafeAreaView, Text } from "react-native";
import { ParamsList } from "../../../App";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<ParamsList, 'health-unit'>

export const HealthUnit: FC<Props> = ({ route }) => {
    const { healthUnitID } = route.params

    return (
        <SafeAreaView>
            <Text>{healthUnitID}</Text>
        </SafeAreaView>
    )
}