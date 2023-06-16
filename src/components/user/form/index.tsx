import { FC, useCallback, useMemo } from "react"
import { User } from "../../../schemas/user"
import {  KeyboardAvoidingView, Platform, Text, View, ScrollView } from "react-native"
import { styles } from "./style"
import { TextField } from "../../text-field"
import { Select } from "../../select"
import { Button } from "../../button"
import { useHealthUnits } from "../../../hooks/use-health-units"
import { useFormContext } from 'react-hook-form'
import { useUser } from "../../../hooks/use-user"

interface EditUserForm extends User{
    password: string
    confirmationPassword: string
}

export const UserForm: FC = () => {
    const { healthUnits } = useHealthUnits()

    const form = useFormContext<EditUserForm>()

    return (
        <View style={styles.form}>
            {/* <View style={styles.grid}> */}
                <TextField 
                    control={form.control}
                    name='firstName'
                    label="Nome"
                    type="text"
                    // containerStyle={styles.gridItem}
                />

                <TextField 
                    control={form.control}
                    name='lastName'
                    label="Sobrenome"
                    type="text"
                    // containerStyle={styles.gridItem}
                />
            {/* </View> */}
            
            <TextField 
                control={form.control}
                name='email'
                label="E-mail"
                type="email"
            />

            <Select 
                name='healthUnitId'
                control={form.control}
                label="Sua Unidade Básica de Saúde"
                items={healthUnits.map(hu => ({ label: hu.name, value: hu.id }))}
                style={styles.select}
            />

            {/* <View style={styles.grid}> */}
                <TextField 
                    control={form.control}
                    name='password'
                    label="Senha"
                    type="password"
                    // containerStyle={styles.gridItem}
                />

                <TextField 
                    control={form.control}
                    name='confirmationPassword'
                    label="Senha de confirmação"
                    type="password"
                    // containerStyle={styles.gridItem}
                />
            {/* </View> */}

            {/* <View style={styles.actions}>
                <Button
                    textStyle={{ color: '#6c757d' }}
                    style={[styles.buttons, styles.cancel]}
                >
                    Cancelar
                </Button>
                <Button
                    style={[styles.buttons, styles.edit]}  
                    textStyle={{ color: '#FFF' }}
                    onPress={id ? form.handleSubmit(data => console.log(data)) : console.log} 
                >
                    Editar
                </Button>
            </View> */}
        </View>
    )
}
