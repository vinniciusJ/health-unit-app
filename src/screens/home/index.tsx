import { ScrollView, Text, View } from 'react-native'
import { Map } from "../../components/map"
import { styles } from './style'
import { useForm } from 'react-hook-form'
import { TextField } from '../../components/text-field'
import { useUserLocation } from '../../hooks/use-user-location'
import { useClosestsHealthUnits } from '../../hooks/use-closests-health-units'
import { HealthUnitPreview } from '../../components/health-unit/preview'

export const HomeScreen = () => {
    const userLocation = useUserLocation()
    const closestsHealthUnits = useClosestsHealthUnits(userLocation.latitude, userLocation.longitude)

    const { control } = useForm({
        defaultValues: {
            search: ''
        }
    })

    return (
        <>
            <Map />

            <View style={styles.container}>
                <TextField
                    name='search' 
                    control={control} 
                    type='text'
                    placeholder='Buscar Unidade de Sáude'
                />

                <View style={styles.closests}>
                    <Text>Unidades de saúde mais próximas: </Text>

                    <ScrollView 
                        horizontal
                        contentContainerStyle={styles.scrollable}
                    >
                        {closestsHealthUnits.map((healhtUnit, index) => (
                            <HealthUnitPreview key={index} {...healhtUnit} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </>
    )
}