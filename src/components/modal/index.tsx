import { ForwardRefRenderFunction, ReactNode, forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { View, Modal as RNModal, SafeAreaView, Text } from "react-native";
import { styles } from "./style";
import { ModalActions } from "../../interfaces/modal-actions";
import { Button } from "../button";
import Feather from '@expo/vector-icons/Feather';


interface Props{
    title: string
    children: ReactNode
    onClose?: () => void
    onSucces: () => void
}

const ModalComponent: ForwardRefRenderFunction<ModalActions, Props> = ({ children, onSucces, title, onClose }, ref) => {
    const [ isOpened, setIsOpened ] = useState(false)

    const handlePopupSuccess = useCallback(() => {
        onSucces()

        setIsOpened(false)
    }, [])

    useImperativeHandle(ref, () => ({
        open: () => setIsOpened(true),
        close: () => setIsOpened(false)
    }))

    return (
        <SafeAreaView>
            <RNModal
                animationType="slide"
                transparent={true}
                visible={isOpened}
                onRequestClose={() => setIsOpened(false)}
            >
                <View style={styles.background}>
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{title}</Text>

                            <Button
                                startIcon={<Feather name="x" size={18} color="black" />}
                                onPress={() => setIsOpened(false)}
                            />
                        </View>

                        {children}
                        
                        <View style={styles.actions}>
                            <Button 
                                style={styles.cancelButton}
                                onPress={() => setIsOpened(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                style={styles.successButton}
                                textStyle={{ color: '#FFF' }}
                                onPress={handlePopupSuccess}
                            >
                                Concluir
                            </Button>
                        </View>
                    </View>
                </View>
            </RNModal>
        </SafeAreaView>
    )
}

export const Modal = forwardRef(ModalComponent)
