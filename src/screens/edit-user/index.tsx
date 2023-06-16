import { StackScreenProps } from "@react-navigation/stack";
import { ParamsList } from "../../../App";
import { Container } from "../../components/container";
import { FC, useCallback } from "react";
import { withAuthentication } from "../../hocs/with-authentication";
import { useForm, FormProvider } from 'react-hook-form'
import { User, userSchema } from "../../schemas/user";
import { useUser } from "../../hooks/use-user";
import { zodResolver } from "@hookform/resolvers/zod";
import {  KeyboardAvoidingView, Platform, Text, View, ScrollView } from "react-native";
import { TextField } from "../../components/text-field";
import { useHealthUnits } from "../../hooks/use-health-units";
import { Select } from "../../components/select";
import { styles } from "./style";
import { Button } from "../../components/button";
import { UserForm } from "../../components/user/form";

type Props = StackScreenProps<ParamsList, 'edit-user'>

interface EditUserForm extends User{
    password: string
    confirmationPassword: string
}

const EditUserScreen: FC<Props> = ({ navigation }) => {
    const { user, editUser } = useUser()

    const form = useForm<EditUserForm>({
        defaultValues: {...user, confirmationPassword: ''},
    })

    const handleUserUpdating = useCallback((data: User) => {
        const newUser = new Map(Object.entries(data))

        newUser.delete('confirmationPassword')
        newUser.delete('healthUnit')

        editUser(user.id, Object.fromEntries(newUser) as User)

        navigation.navigate('user-profile')
    }, [ user ])

    return (
        <KeyboardAvoidingView
            enabled
            style={{ flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={0}
        >
            <Container>
                <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
                    <View>
                        <Text style={styles.title}>Editar usuário</Text>

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
                                        onPress={form.handleSubmit(handleUserUpdating)} 
                                    >
                                        Editar
                                    </Button>
                                </View>
                            </FormProvider>
                    </View>
                </ScrollView>
            </Container>
        </KeyboardAvoidingView>
    )
}

export default withAuthentication(EditUserScreen)