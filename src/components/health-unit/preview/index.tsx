import { FC, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Address } from "../../../schemas/address";
import { addressToString } from "../../../utils/address-to-string";
import { isHealthUnitOpened } from "../../../utils/is-health-unit-opened";
import { OpeningHours } from "../../../interfaces/opening-hours";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { OPENING_LABELS } from "../../../utils/consts";
import { OpeningStatus } from "../opening-status";

interface Props{
    id: number
    name: string
    address: Address
    openingHours: OpeningHours
    listItem?: true
}



export const HealthUnitPreview: FC<Props> = ({ id, listItem, name, address, openingHours }) => {
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigate('health-unit' as never, { healthUnitID: id } as never)}>
            <View style={{...styles.container, ...(!listItem && { width: 146 })}}>
                <View {...(listItem && { style: styles.info })}>
                    <Text numberOfLines={1} ellipsizeMode="tail">
                        {name}
                    </Text>
                    <Text numberOfLines={2} ellipsizeMode="tail">
                        {addressToString(address)}
                    </Text>
                </View>
                
                <OpeningStatus openingHours={openingHours} />
            </View>
        </TouchableOpacity>
    )
}

//style={styles[isOpened ? 'openedText' : 'closedText']}