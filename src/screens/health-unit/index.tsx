import { RouteProp } from "@react-navigation/native";
import { FC, useCallback, useMemo } from "react";
import { Image,  SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ParamsList } from "../../../App";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "./style";

import FontAwesome from '@expo/vector-icons/FontAwesome5'
import Feather from '@expo/vector-icons/Feather'

import { useHealthUnitDetails } from "../../hooks/use-health-unit-details";
import { addressToString } from "../../utils/address-to-string";
import { OpeningStatus } from "../../components/health-unit/opening-status";
import MapView, { Marker } from "react-native-maps";
import { Button } from "../../components/button";
import { call } from "../../utils/call";
import { openOnMaps } from "../../utils/open-on-maps";
import { withAuthentication } from "../../hocs/with-authentication";
import { useAuth } from "../../hooks/use-auth";
import { useUserSession } from "../../hooks/use-user-session";

type Props = StackScreenProps<ParamsList, 'health-unit'>

const HealthUnitScreen: FC<Props> = ({ navigation, route }) => {
    const { healthUnitID } = route.params

    const { user } = useUserSession()
    const { healthUnit } = useHealthUnitDetails(healthUnitID)

    const isUserUBS = useMemo(() => user.healthUnitId === healthUnitID, [])

    const handleMapOpening = useCallback(async () => {
        const { geolocation } = healthUnit

        try{
            await openOnMaps(geolocation)
        }
        catch(error){
            console.log(error)
        }
    }, [ healthUnit ])

    if(!healthUnit){
        return (
            <View>
                <Text>Error</Text>
            </View>
        )
    }
  
    return (
        <>
        <SafeAreaView style={styles.container}>
            <View style={styles.goBack}>
                <TouchableOpacity onPress={() => navigation.navigate('home' as never)}>
                    <FontAwesome name="arrow-left" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.goBackTitle}>Voltar ao mapa</Text>
            </View>

            <ScrollView 
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >  
                <Image 
                    source={{ uri: String(healthUnit?.imageURL) }} 
                    style={styles.image}
                    resizeMode="cover"
                />

                <View style={styles.header}>
                    <Text style={styles.title}>{healthUnit?.name}</Text>

                    {isUserUBS && (
                        <View style={styles.yourUBSTag}>
                            <Text style={styles.yourUBSLabel}>Sua UBS</Text>
                        </View>
                    )}
                </View>

                <View style={styles.info}>
                    <Text style={styles.infoHeader}>Horário de atendimento</Text>

                    <View style={styles.hoursContainer}>
                        <Text style={styles.hours}>Horário: {healthUnit.openingHours}</Text> 
                        
                        <OpeningStatus 
                            openingHours={healthUnit.openingHours} 
                        />
                    </View>
                </View>                
                
                <View style={styles.info}>
                    <Text style={styles.infoHeader}>Endreço</Text>
                    <Text>{addressToString(healthUnit.address)}</Text>

                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            zoomEnabled={false}
                            scrollEnabled={false}
                            initialRegion={{
                                latitude: healthUnit.geolocation.lat,
                                longitude: healthUnit.geolocation.long,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            }}
                            
                        >
                            <Marker 
                                title={healthUnit.name}
                                description={healthUnit.name}
                                coordinate={{
                                    latitude: healthUnit.geolocation.lat,
                                    longitude: healthUnit.geolocation.long,
                                }} 
                            /> 
                        </MapView>
                    </View>

                    <Button
                        textStyle={styles.openOnMapLabel}
                        style={styles.openOnMapButton}
                        endIcon={<Feather name="map-pin" size={14} color="#fff" />}
                        onPress={handleMapOpening}
                    >
                        Abrir no maps
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>

        <View style={styles.actions}>
            <Button
                textStyle={{ color: '#38b000' }}
                startIcon={<Feather name="phone-call" size={14} color="#38b000" />}
                style={[styles.actionsButtons, styles.phoneButton]}
                onPress={() => call(healthUnit.phone)}
            >
                Ligar
            </Button>
            
            <Button 
                textStyle={{ color: isUserUBS ? '#fff': '#0096c7' }}
                disabled={isUserUBS}
                startIcon={<FontAwesome name="hospital" size={14} color={isUserUBS ? '#fff': '#0096c7'} />}
                style={[styles.actionsButtons, styles.addToMyUBS, (isUserUBS ? styles.myUBS : {})]}
            >
                Minha UBS
            </Button>
            
        </View>
        </>
    )
}

export default withAuthentication(HealthUnitScreen)