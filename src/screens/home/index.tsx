import { ScrollView, Text, View } from 'react-native'
import { Map } from "../../components/map"
import { styles } from './style'
import { useForm, FormProvider } from 'react-hook-form'
import { TextField } from '../../components/text-field'
import { useUserLocation } from '../../hooks/use-user-location'
import { useClosestsHealthUnits } from '../../hooks/use-closests-health-units'
import { HealthUnitPreview } from '../../components/health-unit/preview'
import { startTransition, useEffect, useState } from 'react'
import { ClosestsHealthUnits } from '../../components/health-unit/closests-list'
import { HealthUnitsList } from '../../components/health-unit/list'
import { HealthUnitFilter } from '../../interfaces/health-unit-filter'
import { useHealthUnits } from '../../hooks/use-health-units'

export const HomeScreen = () => {
    const [ isSearching, setIsSearching ] = useState(false)

    const { filterHealthUnits } = useHealthUnits()
    const form = useForm<HealthUnitFilter>({
        defaultValues: {
            query: ''
        }
    })

    const query = form.watch('query')

    useEffect(() => {
        startTransition(() => {
            filterHealthUnits({ query })
        })
    }, [ query ])

    return (
        <>
            <Map />

            <View style={styles[isSearching ? 'searching' : 'container']}>
                <FormProvider {...form}>
                    <TextField
                        name='query' 
                        type='text'
                        control={form.control} 
                        onFocus={() => setIsSearching(true)}
                        onBlur={() => setIsSearching(false)}
                        placeholder='Buscar Unidade de Sáude'
                    />

                    {isSearching && <HealthUnitsList />}
                    {!isSearching && <ClosestsHealthUnits />}
                </FormProvider>
            </View>

        </>
    )
}