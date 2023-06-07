import { FC } from 'react'
import { View, Button as NativeButton, ButtonProps } from "react-native"
import { styles } from './style'

interface Props extends Omit<ButtonProps, 'title'>{
    children: string
    width?: number | string
}

export const Button: FC<Props> = ({ children, width, ...buttonProps }) => {
    return (
        <View style={{...styles.container, width }}>
            <NativeButton {...buttonProps} color='#FFF' title={children} /> 
        </View>
    )
}