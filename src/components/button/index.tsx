import { FC } from 'react'
import { View, Button as NativeButton, ButtonProps, Touchable, TouchableOpacity } from "react-native"
import { styles } from './style'

interface Props extends Omit<ButtonProps, 'title'>{
    children: string
    width?: number | string
}

export const Button: FC<Props> = ({ children, width, ...buttonProps }) => {
    return (
        <TouchableOpacity style={{...styles.container, width }}>
            <NativeButton {...buttonProps} color='#FFF' title={children} /> 
        </TouchableOpacity>
    )
}