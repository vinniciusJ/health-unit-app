import {  View, Text } from 'react-native'
import { styles } from './style'
import MapView, { Marker, Callout, Region } from 'react-native-maps'
import { useUserLocation } from '../../hooks/use-user-location'
import { useHealthUnits } from '../../hooks/use-health-units'
import { useCallback, useRef, useState } from 'react'
import { getZoomLevel } from '../../utils/get-zoom-level'

export const HealthUnitsMap = () => {
    const userLocation = useUserLocation()
    const { healthUnits } = useHealthUnits()
  
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