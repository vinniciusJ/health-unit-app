import { FC, ReactNode } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { GoBackButton } from "../go-back";

interface Props {
    children: ReactNode
}

export const Container: FC<Props> = ({ children }) => {
    return (
        <SafeAreaView style={{ margin: 24,  marginTop: 64, flex: 1, height: '100%' }}>
            <GoBackButton />

            {children}
        
        </SafeAreaView>
    )
}