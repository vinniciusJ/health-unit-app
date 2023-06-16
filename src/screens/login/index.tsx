import {  KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, View } from 'react-native'
import { styles } from './style'
import { Button } from '../../components/button'
import { TextField } from '../../components/text-field'
import { useForm } from 'react-hook-form'
import { Credentials, credentialsSchema } from '../../schemas/credentials'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useCallback } from 'react'
import { useAuth } from '../../hooks/use-auth'
import { ParamsList } from '../../../App'
import { StackScreenProps } from '@react-navigation/stack'

type Props = StackScreenProps<ParamsList, 'login'>

export const LoginScreen: FC<Props> = ({ navigation }) => {
    const { signIn } = useAuth()

    const { control, handleSubmit } = useForm<Credentials>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(credentialsSchema)
    })

    return (
        <>
            <KeyboardAvoidingView
                enabled
                style={{ flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={0}
            >
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

                    <Button  
                        onPress={handleSubmit(signIn)}
                        style={styles.loginButton}
                        textStyle={{ color: '#FFF' }}
                    >
                        Login
                    </Button>

                    
                </SafeAreaView>
            </KeyboardAvoidingView>

            <Button 
                style={styles.createAccount}
                onPress={() => navigation.navigate('create-user')}
                >
                Criar conta
            </Button>
        </>
    )
}