import { FC } from 'react'
import { Text, TextInputProps, TextInput, View, KeyboardTypeOptions } from "react-native"
import { styles } from './style'
import { Control, Controller, Path } from 'react-hook-form'

type Type = 'email' | 'password' | 'text' | 'number'

interface Props<T extends object> extends Omit<TextInputProps, 'name'>{
	label?: string
	control: Control<T>
	required?: boolean
	name: Path<T>
	type: Type
}

const KEYBOARD_TYPE: Record<Type, KeyboardTypeOptions> = {
	email: 'email-address',
	number: 'numeric',
	password: 'visible-password',
	text: 'ascii-capable'
}

export function TextField<T extends object>({ control, required, name, type, label, ...inputProps }: Props<T>) {
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




