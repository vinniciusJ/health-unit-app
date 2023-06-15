import { FC, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useMenu } from "../../hooks/use-menu";
import { styles } from "./style";
import Feather from '@expo/vector-icons/Feather';
import { Button } from "../button";
import { UserPreview } from "../user/preview";
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/use-auth";

export const Menu: FC = () => {
    const { isMenuOpened, toggleMenu } = useMenu()
    const { logout } = useAuth()

    const { navigate } = useNavigation()

    if(!isMenuOpened){
        return null
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <SafeAreaView style={styles.content}>
                    <View style={styles.close}>
                        <Button 
                            onPress={toggleMenu}
                            startIcon={<Feather name="x" size={24} color="black" />}
                        />
                    </View>

                    <UserPreview />

                    <View style={styles.list}>
                        <Button
                            style={styles.item}
                            textStyle={styles.itemText}
                            onPress={() => navigate('my-health-unit' as never)}
                            startIcon={<FontAwesome name="hospital" size={28} color='black'/>}
                        >
                            Minha UBS
                        </Button>
                        <Button
                            style={styles.item}
                            textStyle={styles.itemText}
                            startIcon={<FontAwesome name="hospital" size={28} color='black'/>}
                        >
                            UBS
                        </Button>
                        <Button
                            style={styles.item}
                            textStyle={styles.itemText}
                            startIcon={<FontAwesome name="hospital" size={28} color='black'/>}
                        >
                            UPAs
                        </Button>
                        <Button
                            style={{...styles.item, gap: 14}}
                            textStyle={styles.itemText}
                            startIcon={<Feather name="phone" size={28} color="black" />}
                        >
                            Telefones
                        </Button>
                    </View>

                    <View style={styles.logout}>
                        <Button
                            onPress={logout}
                            style={styles.logoutButton}
                            textStyle={styles.logoutText}
                            startIcon={<Feather name="log-out" size={18} color="black" />}
                        >
                            Sair
                        </Button>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}