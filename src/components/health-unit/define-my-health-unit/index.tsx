import { FC, useCallback, useEffect, useMemo } from "react";
import { Text, View } from "react-native";

import Feather from '@expo/vector-icons/Feather'
import { styles } from "./style";
import { Button } from "../../button";
import { useModal } from "../../../hooks/use-modal";
import { Modal } from "../../modal";
import { useHealthUnits } from "../../../hooks/use-health-units";
import { Select } from "../../select";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { AxiosError } from "axios";
import { UsersService } from "../../../services/user";

interface Props{
    userID: number
}

interface Form {
    healthUnit: { id: number }
}

const usersService = new UsersService()

export const DefineMyHealthUnit: FC<Props> = ({ userID }) => {
    const { healthUnits, filterHealthUnits } = useHealthUnits()
    const modalRef = useModal()

    const { navigate } = useNavigation()
    const { control, handleSubmit } = useForm<Form>({
        defaultValues: {
            healthUnit: { id: 0 }
        }
    })

    const defineUserHealthUnit = useCallback(async ({ healthUnit }: Form) => {
        try{
            await usersService.defineUserHealthUnit(userID, healthUnit.id)
            
        }
        catch(error){
            console.log(error as AxiosError)

            navigate('home' as never)
        }
    }, [])

    useEffect(() => {
        filterHealthUnits({})
    }, [])

    return (
        <>
            <View style={styles.emptyHealthUnit}>
                <Text
                    style={styles.emptyHealthUnitMessage}
                >
                    Você ainda não possui nenhuma unidade de saúde definida como sua. Deseja definir alguma?
                </Text>

                <Button
                    startIcon={<Feather name="plus" size={24} color="#FFF" />}
                    style={styles.addMyUBS}  
                    textStyle={{ color: '#FFF' }} 
                    onPress={() => modalRef.current?.open()}
                >
                    Definir minha UBS
                </Button>
            </View>

            <Modal 
                title="Definir minha UBS"
                onSucces={handleSubmit(defineUserHealthUnit)}
                ref={modalRef}
            >
                <View style={styles.fieldset}>
                    <Text>Escolha uma das UBS:</Text>
                    <Select
                        name='healthUnit.id'
                        control={control}
                        style={{ height: 32 }}
                        items={healthUnits.map(hu => ({ value: hu.id, label: hu.name }))}
                    />
                </View>
            </Modal>
        </>
    )
}