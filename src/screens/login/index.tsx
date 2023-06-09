import {  SafeAreaView, Text, TextInput, View } from 'react-native'
import { styles } from './style'
import { Button } from '../../components/button'
import { TextField } from '../../components/text-field'
import { useForm } from 'react-hook-form'
import { Credentials, credentialsSchema } from '../../schemas/credentials'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useAuth } from '../../hooks/use-auth'


export const LoginScreen = () => {
    const { signIn } = useAuth()

    const { control, handleSubmit } = useForm<Credentials>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(credentialsSchema)
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.logoTitle}>SAS</Text>
                <Text>Sistema de Atendimento a Saúde</Text>
            </View>

            <View style={styles.form}>
                <TextField 
                    label='E-mail'
                    name='email'
                    control={control}
                    type='email'
                    placeholder='Digite seu e-mail'
                />

                <TextField 
                    label='Senha'
                    name='password'
                    type='password'
                    control={control}
                    placeholder='Digite sua senha'
                />
            </View>

            <Button  onPress={handleSubmit(signIn)}>
                Login
            </Button>
        </SafeAreaView>
    )
}