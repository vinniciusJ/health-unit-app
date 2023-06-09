import { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { OPENING_LABELS } from "../../../utils/consts";
import { OpeningHours } from "../../../interfaces/opening-hours";
import { isHealthUnitOpened } from "../../../utils/is-health-unit-opened";
import { styles } from "./style";

interface Props{
    openingHours: OpeningHours
}

export const OpeningStatus: FC<Props> = ({ openingHours }) => {
    const isOpened = useMemo(() => isHealthUnitOpened(openingHours), [openingHours])

    return (
        <View style={styles[isOpened ? 'opened' : 'closed']}>
            <Text style={styles[isOpened ? 'openedText' : 'closedText']}>
                {OPENING_LABELS[Number(isOpened)]}
            </Text>
        </View>
    )
}