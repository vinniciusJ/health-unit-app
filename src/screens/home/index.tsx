import { Text, View } from 'react-native'
import { Map } from "../../components/map"
import { styles } from './style'
import { useForm } from 'react-hook-form'
import { TextField } from '../../components/text-field'
import { useUserLocation } from '../../hooks/use-user-location'
import { useClosestsHealthUnities } from '../../hooks/use-closests-health-unities'

export const HomeScreen = () => {
    const userLocation = useUserLocation()
    const closestsHealthUnities = useClosestsHealthUnities(userLocation.latitude, userLocation.longitude)

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
            </View>
        </>
    )
}