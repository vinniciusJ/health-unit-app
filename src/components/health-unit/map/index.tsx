import {  View } from 'react-native'
import { styles } from './style'
import MapView, { Callout, Marker } from 'react-native-maps'
import { useUserLocation } from '../../../hooks/use-user-location'
import { HealthUnit } from '../../../schemas/health-unit'
import { FC, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

interface Props{
    healthUnits: HealthUnit[]
}

export const HealthUnitsMap: FC<Props> = ({ healthUnits }) => {
    const { navigate } = useNavigation()
    const userLocation = useUserLocation()

    const handleCalloutPressing = useCallback((healthUnitID: number) => {
        navigate('health-unit' as never, { healthUnitID } as never)
    }, [])
  
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                
            >
                <Marker 
                    title='Você'
                    pinColor='green'
                    coordinate={{...userLocation}} 
                />
               
                {healthUnits.map((healthUnit, index) => (
                    <Marker 
                        key={index}
                        title={healthUnit.name}
                        description={healthUnit.name}
                        onCalloutPress={() => handleCalloutPressing(healthUnit.id)}
                        coordinate={{
                            latitude: healthUnit.geolocation.lat,
                            longitude: healthUnit.geolocation.long,
                        }}
                        pinColor={healthUnit.type == 'UBS' ? '#0096c7' : 'red'}
                    />  
                ))}
            </MapView>
        </View>
    )
}