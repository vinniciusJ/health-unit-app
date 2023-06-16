import { FC, useCallback } from "react";
import { View, KeyboardAvoidingView, Text, Platform, ScrollView } from "react-native";
import { Container } from "../../components/container";
import { User } from "../../schemas/user";
import { useForm, FormProvider } from 'react-hook-form'
import { UserForm } from "../../components/user/form";
import { Button } from "../../components/button";
import { styles } from './style'
import { StackScreenProps } from "@react-navigation/stack";
import { ParamsList } from "../../../App";
import { useUser } from "../../hooks/use-user";
import { useAuth } from "../../hooks/use-auth";
import { userAtom } from "../../contexts/user";

interface UserForm extends User{
    password: string
    confirmationPassword: string
}

type Props = StackScreenProps<ParamsList, 'create-user'>

export const CreateUserScreen: FC<Props> = ({ navigation }) => {
    const { signup } = useAuth()

    const form = useForm<UserForm>()

    const onFormSubmission = useCallback((data: User) => {
        const formattedData = new Map(Object.entries(data))

        formattedData.delete('confirmationPassword')
        formattedData.delete('healthUnit')

        const user = Object.fromEntries(formattedData) as User

        signup({ ...user, role: 'USER' })

        navigation.navigate('home')
    }, [])

    return (
        <KeyboardAvoidingView
            enabled
            style={{ flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={0}
        >
             <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
                <Container>
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.title}>Seja bem-vindo(a) ao SAS</Text>
                            <Text>
                                Para conluir o seu cadastro precisamos de algumas informações sobre você
                            </Text>
                        </View>
                        <View>
                            <FormProvider {...form}>
                                <UserForm />

                                <View style={styles.actions}>
                                    <Button
                                        textStyle={{ color: '#6c757d' }}
                                        style={[styles.buttons, styles.cancel]}
                                        onPress={() => navigation.goBack()}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        style={[styles.buttons, styles.edit]}  
                                        textStyle={{ color: '#FFF' }}
                                        onPress={form.handleSubmit(onFormSubmission)}
                                    >
                                        Salvar
                                    </Button>
                                </View>
                            </FormProvider>
                        </View>

                    </View>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}