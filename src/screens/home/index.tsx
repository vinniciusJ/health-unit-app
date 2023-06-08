import { Button, ScrollView, Text, View } from 'react-native'
import { Map } from "../../components/map"
import { styles } from './style'
import { useForm, FormProvider } from 'react-hook-form'
import { TextField } from '../../components/text-field'
import { startTransition, useEffect, useState } from 'react'
import { ClosestsHealthUnits } from '../../components/health-unit/closests-list'
import { HealthUnitsList } from '../../components/health-unit/list'
import { HealthUnitFilter } from '../../interfaces/health-unit-filter'
import { useHealthUnits } from '../../hooks/use-health-units'
import { Select } from '../../components/select'


export const HomeScreen = () => {
    const [ isSearching, setIsSearching ] = useState(false)

    const { filterHealthUnits } = useHealthUnits()

    const form = useForm<HealthUnitFilter>({
        defaultValues: {
            query: '', type: ''
        }
    })

    const [query, type] = form.watch(['query', 'type'])

    useEffect(() => {
        startTransition(() => {
            filterHealthUnits({ query })
        })
    }, [ query ])

    useEffect(() => {
        form.setValue('type', '')
    }, [isSearching])

    useEffect(() => {
        filterHealthUnits({ type })
    }, [ type ])

    return (
        <>
            <Map />

            <View style={styles.typeFilter}>
                <Select
                    name='type'
                    control={form.control}
                    style={styles.select}
                    items={[
                        { value: '', label: 'Todos' },
                        { value: 'UBS', label: 'UBS' },
                        { value: 'UPA', label: 'UPA' },
                    ]}
                />
            </View>

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