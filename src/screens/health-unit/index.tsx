import { RouteProp } from "@react-navigation/native";
import { FC, useMemo } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ParamsList } from "../../../App";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "./style";

import FontAwesome from '@expo/vector-icons/FontAwesome5'
import Feather from '@expo/vector-icons/Feather'

import { useHealthUnitDetails } from "../../hooks/use-health-unit-details";
import { addressToString } from "../../utils/address-to-string";
import { Address } from "../../schemas/address";
import { isHealthUnitOpened } from "../../utils/is-health-unit-opened";
import { OpeningHours } from "../../interfaces/opening-hours";
import { OPENING_LABELS } from "../../utils/consts";
import { OpeningStatus } from "../../components/health-unit/opening-status";
import MapView, { Marker } from "react-native-maps";
import { Button } from "../../components/button";

type Props = StackScreenProps<ParamsList, 'health-unit'>

export const HealthUnit: FC<Props> = ({ navigation, route }) => {
    const { healthUnitID } = route.params

    const { healthUnit } = useHealthUnitDetails(healthUnitID)
    
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

                <Text style={styles.title}>{healthUnit?.name}</Text>

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
                        textStyle={{ color: '#FFF' }}
                        style={{ backgroundColor: '#0096c7' }}
                        endIcon={<Feather name="map-pin" size={14} color="#fff" />}
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
            >
                Ligar
            </Button>
            <Button 
                textStyle={{ color: '#0096c7' }}
                startIcon={<Feather name="phone-call" size={14} color="#0096c7" />}
                style={[styles.actionsButtons, styles.myUBSButton]}
            >
                Minha UBS
            </Button>
        </View>
        </>
    )
}