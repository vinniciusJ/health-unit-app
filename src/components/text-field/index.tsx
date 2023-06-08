import { FC } from 'react'
import { Text, TextInputProps, TextInput, View, KeyboardTypeOptions } from "react-native"
import { styles } from './style'
import { Control, Controller, Path } from 'react-hook-form'

type Type = 'email' | 'password' | 'text' | 'number'

interface ControlInputProps<T extends object> {
	label?: string
	control: Control<T>
	required?: boolean
	name: Path<T>
	select?: never
	items?: never
	type: Type
}

interface ControlSelectProps<T extends object> {
	label?: string
	control: Control<T>
	required?: boolean
	name: Path<T>
	select: true
	items: Array<{ value: string | number; label: string }>
	type: Type
}

type Props<T extends object> = (ControlInputProps<T> | ControlSelectProps<T>) & Omit<TextInputProps, 'name'>

const KEYBOARD_TYPE: Record<Type, KeyboardTypeOptions> = {
	email: 'email-address',
	number: 'numeric',
	password: 'visible-password',
	text: 'ascii-capable'
}

export function TextField<T extends object>({ control, required, name, select, type, items, label, ...inputProps }: Props<T>) {
    return (
        <Controller 
			control={control}
			name={name}
			render={({ field }) =>  (
				<View style={styles.container}>
					{label && <Text>{label}</Text>}
					<TextInput 
						{...inputProps}
						secureTextEntry={type === 'password'}
						keyboardType={KEYBOARD_TYPE[type]}
						style={styles.input}
						onChangeText={field.onChange}
            			value={field.value}
					/>
				</View>
			)}
		/>
    )
}




