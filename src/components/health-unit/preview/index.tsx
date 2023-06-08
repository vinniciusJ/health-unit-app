import { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { Address } from "../../../schemas/address";
import { addressToString } from "../../../utils/address-to-string";
import { isHealthUnitOpened } from "../../../utils/is-health-unit-opened";
import { OpeningHours } from "../../../interfaces/opening-hours";
import { styles } from "./style";

interface Props{
    name: string
    address: Address
    openingHours: OpeningHours
}

const OPENING_LABELS = ['Fechado', 'Aberto'] as const

export const HealthUnitPreview: FC<Props> = ({ name, address, openingHours }) => {
    const isOpened = useMemo(() => isHealthUnitOpened(openingHours), [openingHours])

    return (
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
    )
}

//style={styles[isOpened ? 'openedText' : 'closedText']}