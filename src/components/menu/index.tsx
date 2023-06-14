import { FC } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useMenu } from "../../hooks/use-menu";
import { styles } from "./style";
import Feather from '@expo/vector-icons/Feather';
import { Button } from "../button";

export const Menu: FC = () => {
    const { isMenuOpened, toggleMenu } = useMenu()

    if(!isMenuOpened){
        return null
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <SafeAreaView>
                    <View style={styles.close}>
                        <Button 
                            onPress={toggleMenu}
                            startIcon={<Feather name="x" size={24} color="black" />}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}