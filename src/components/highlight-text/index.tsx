import { FC, memo, useCallback } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

interface Props{
    search: string
    children: string
}

const Highlight: FC<Props> = ({ search, children }) => {
    const regex = new RegExp(`(${search})`, 'gi')
    const parts = children.split(regex)

    const isEqualToSearch = useCallback((string: string) =>  string.toLowerCase() === search.toLowerCase(), [ search ])

    return (
        <View style={styles.container}>
            {parts.map((part, index) => (
                <Text
                    key={index}
                    style={isEqualToSearch(part) ? styles.highlight : null}
                >
                    {part}
                </Text>
            ))}
        </View>
    )
}

export const HighlightText = memo(Highlight)