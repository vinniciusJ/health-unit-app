import { ScrollView, Text, View } from 'react-native'
import { Map } from "../../components/map"
import { styles } from './style'
import { useForm } from 'react-hook-form'
import { TextField } from '../../components/text-field'
import { useUserLocation } from '../../hooks/use-user-location'
import { useClosestsHealthUnits } from '../../hooks/use-closests-health-units'
import { HealthUnitPreview } from '../../components/health-unit/preview'
import { useState } from 'react'
import { ClosestsHealthUnits } from '../../components/health-unit/closests-list'

export const HomeScreen = () => {
    const [ isSearching, setIsSearching ] = useState(false)

    

    const { control } = useForm({
        defaultValues: {
            search: ''
        }
    })

    return (
        <>
            <Map />

            <View style={styles[isSearching ? 'searching' : 'container']}>
                <TextField
                    name='search' 
                    type='text'
                    control={control} 
                    onFocus={() => setIsSearching(true)}
                    onBlur={() => setIsSearching(false)}
                    placeholder='Buscar Unidade de Sáude'
                />

                {/* {isSearching && (

                )} */}

                {!isSearching && <ClosestsHealthUnits />}
            </View>

        </>
    )
}