import { FC, ReactNode } from "react";
import { SafeAreaView } from "react-native";
import { GoBackButton } from "../go-back";

interface Props {
    children: ReactNode
}

export const Container: FC<Props> = ({ children }) => {
    return (
        <SafeAreaView style={{ margin: 24,  marginTop: 64 }}>
            <GoBackButton />

            {children}
        </SafeAreaView>
    )
}