import {  View } from 'react-native'
import { styles } from './style'
import MapView, { Marker } from 'react-native-maps'
import { useUserLocation } from '../../hooks/use-user-location'
import { HealthUnit } from '../../schemas/health-unit'
import { FC } from 'react'

interface Props{
    healthUnits: HealthUnit[]
}

export const HealthUnitsMap: FC<Props> = ({ healthUnits }) => {
    const userLocation = useUserLocation()
  
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                
            >
                <Marker coordinate={{...userLocation}} title='Você'/>
                {healthUnits.map((healthUnit, index) => (
                    <Marker 
                        key={index}
                        title={healthUnit.name}
                        description={healthUnit.name}
                        coordinate={{
                            latitude: healthUnit.geolocation.lat,
                            longitude: healthUnit.geolocation.long,
                        }} 
                    />
                ))}
            </MapView>
        </View>
    )
}