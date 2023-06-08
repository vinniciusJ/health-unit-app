import { FC, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Address } from "../../../schemas/address";
import { addressToString } from "../../../utils/address-to-string";
import { isHealthUnitOpened } from "../../../utils/is-health-unit-opened";
import { OpeningHours } from "../../../interfaces/opening-hours";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

interface Props{
    id: number
    name: string
    address: Address
    openingHours: OpeningHours
}

const OPENING_LABELS = ['Fechado', 'Aberto'] as const

export const HealthUnitPreview: FC<Props> = ({ id, name, address, openingHours }) => {
    const { navigate } = useNavigation()

    const isOpened = useMemo(() => isHealthUnitOpened(openingHours), [openingHours])

    return (
        <TouchableOpacity onPress={() => navigate('health-unit' as never, { healthUnitID: id } as never)}>
            <View style={styles.container}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                    {name}
                </Text>
                <Text numberOfLines={2} ellipsizeMode="tail">
                    {addressToString(address)}
                </Text>
                <View style={styles[isOpened ? 'opened' : 'closed']}>
                    <Text style={styles[isOpened ? 'openedText' : 'closedText']}>
                        {OPENING_LABELS[Number(isOpened)]}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

//style={styles[isOpened ? 'openedText' : 'closedText']}