import { FC, useMemo } from "react";
import { Container } from "../../components/container";
import { withAuthentication } from "../../hocs/with-authentication";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamsList } from "../../../App";
import { useUser } from "../../hooks/use-user";
import { Pressable, Text, View } from "react-native";
import { generateAvatarFromInitials } from "../../utils/generate-avatar-from-initials";
import { HealthUnitPreview } from "../../components/health-unit/preview";
import { DefineMyHealthUnit } from "../../components/health-unit/define-my-health-unit";
import { styles } from "./style";
import { addressToString } from "../../utils/address-to-string";
import MapView, { Marker } from "react-native-maps";
import { Button } from "../../components/button";
import Feather from '@expo/vector-icons/Feather'
import { openOnMaps } from "../../utils/open-on-maps";

type Props = StackScreenProps<ParamsList, 'user-profile'>

const UserProfileScreen: FC<Props> = ({ navigation }) => {
    const { user } = useUser()

    const userUBS = useMemo(() => user.healthUnit, [ user ])

    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.userInfo}>
                    <View style={styles.avatar}>
                        <Text style={styles.initials}>
                            {generateAvatarFromInitials(user)}
                        </Text>
                    </View>
                    
                    <View>
                        <Text style={styles.fullname}>
                            {user.firstName} {user.lastName}
                        </Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>

                <Text style={styles.yourUBS}>Sua Unidade de Saúde Básica</Text>

                {userUBS && (
                    <Pressable 
                        onPress={() => navigation.navigate('health-unit', { healthUnitID: userUBS.id })}
                    >
                        <View style={styles.userUBS}>
                            <Text style={styles.ubsName}>
                                {userUBS.name}
                            </Text>
                            <Text>{addressToString(userUBS.address)}</Text>

                            <View style={styles.mapContainer}>
                                <MapView
                                    style={styles.map}
                                    zoomEnabled={false}
                                    scrollEnabled={false}
                                    initialRegion={{
                                        latitude: userUBS.geolocation.lat,
                                        longitude: userUBS.geolocation.long,
                                        latitudeDelta: 0.01,
                                        longitudeDelta: 0.01,
                                    }}
                                    
                                >
                                    <Marker 
                                        title={userUBS.name}
                                        description={userUBS.name}
                                        coordinate={{
                                            latitude: userUBS.geolocation.lat,
                                            longitude: userUBS.geolocation.long,
                                        }} 
                                    /> 
                                </MapView>
                            </View>

                            <Button
                                textStyle={styles.openOnMapLabel}
                                style={styles.openOnMapButton}
                                endIcon={<Feather name="map-pin" size={14} color="#fff" />}
                                onPress={() => openOnMaps(userUBS.geolocation)}
                            >
                                Abrir no maps
                            </Button>
                        </View>
                    </Pressable>
                )}

                {!userUBS && (
                    <View style={styles.noHealthUnit}>
                        <DefineMyHealthUnit userID={user.id}/>
                    </View>
                )}
            </View>
        </Container>
    )
}

export default withAuthentication(UserProfileScreen)