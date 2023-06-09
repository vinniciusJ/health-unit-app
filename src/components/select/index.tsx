import { FC } from "react";
import { Controller, Control, Path } from "react-hook-form";
import { View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native'
import RNPickerSelect from "react-native-picker-select"
import { styles } from "./style";
import Entypo from '@expo/vector-icons/Entypo';

type Item = {
    label: string
    value: string | number
}

interface Props<T extends object>{
	label?: string
	control: Control<T>
	name: Path<T>
    items: Item[]
    style?: StyleProp<ViewStyle>
}

export function Select<T extends object>({ control, name, items, style, label }: Props<T>) {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={[styles.selectContainer, style]}>
                <Controller 
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <RNPickerSelect
                            value={field.value}
                            onValueChange={field.onChange}
                            items={items}
                            Icon={() => (
                                <View style={styles.icon}>
                                    <Entypo name="chevron-down" size={20} color="#747373" />
                                </View>
                            )}
                            style={{ 
                                inputIOS: styles.select,
                                inputAndroid: styles.select,
                                iconContainer: { top: -2 }
                            }}
                        />
                    )}
                />
            </View>
        </View>
    )
}