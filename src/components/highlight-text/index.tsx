import { FC, memo, useCallback } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./style";

interface Props{
    search: string
    children: string
    style?: StyleProp<ViewStyle>
}

const Highlight: FC<Props> = ({ search, children, style }) => {
    const regex = new RegExp(`(${search})`, 'gi')
    const parts = children.split(regex)

    const isEqualToSearch = useCallback((string: string) =>  string.toLowerCase() === search.toLowerCase(), [ search ])
    
    const truncateText = useCallback((text: string, maxLength: number) => {
      if (text.length <= maxLength) {
          return text;
        }
        return text.slice(0, maxLength) + '...';
    }, [])
    

    return (
        <View style={[styles.container, style]}>
            <Text numberOfLines={1} ellipsizeMode="tail">
                {parts.map((part, index) => (
                    <Text
                        key={index}
                        style={isEqualToSearch(part) ? styles.highlight : null}
                    >
                        {truncateText(part, 40)}
                    </Text>
                ))}
            </Text>
        </View>
    )
}

export const HighlightText = memo(Highlight)