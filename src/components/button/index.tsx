import { FC, ReactNode } from 'react'
import {  TouchableOpacity, Text, StyleProp, TextStyle, TouchableOpacityProps } from "react-native"
import { styles } from './style'

interface Props extends Omit<TouchableOpacityProps, 'title'>{
    children: string
    startIcon?: ReactNode
    endIcon?: ReactNode
    textStyle?: StyleProp<TextStyle>
}

export const Button: FC<Props> = ({ children,  startIcon, endIcon, textStyle, ...buttonProps }) => {
    return (
        <TouchableOpacity 
            {...buttonProps}
            style={[ styles.container, buttonProps.style ]}
        >
            {startIcon}

            <Text style={textStyle}>{children}</Text>

            { endIcon  }
        </TouchableOpacity>
    )
}