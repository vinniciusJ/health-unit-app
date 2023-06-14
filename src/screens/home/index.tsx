import {  ScrollView, Text, TextInput, View } from 'react-native'
import { HealthUnitsMap } from "../../components/health-unit/map"
import { styles } from './style'
import { useForm, FormProvider } from 'react-hook-form'
import { TextField } from '../../components/text-field'
import { startTransition, useCallback, useEffect, useRef, useState } from 'react'
import { ClosestsHealthUnits } from '../../components/health-unit/closests'
import { HealthUnitsList } from '../../components/health-unit/list'
import { HealthUnitFilter } from '../../interfaces/health-unit-filter'
import { useHealthUnits } from '../../hooks/use-health-units'
import { Select } from '../../components/select'
import { Button } from '../../components/button'
import { withAuthentication } from '../../hocs/with-authentication'
import { useAuth } from '../../hooks/use-auth'

const HomeScreen = () => {
    const queryInputRef = useRef<TextInput>(null)
    const [ isSearching, setIsSearching ] = useState(false)

    const { healthUnits, closestsHealthUnits, filterHealthUnits } = useHealthUnits()
    const { userSession } = useAuth()

    const form = useForm<HealthUnitFilter>({
        defaultValues: {
            query: '', type: ''
        }
    })

    const [query, type] = form.watch(['query', 'type'])

    const closeSearching = useCallback(() => {
        queryInputRef.current?.blur()

        setIsSearching(false)
    }, [])

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
            <HealthUnitsMap healthUnits={healthUnits}/>

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
                    <View {...(isSearching && { style: styles.textfield })}>
                        <TextField
                            name='query' 
                            type='text'
                            inputRef={queryInputRef}
                            control={form.control} 
                            onFocus={() => setIsSearching(true)}
                            style={{ width: isSearching ? 268 : '100%' }}
                            placeholder='Buscar Unidade de Sáude'
                        />

                        {isSearching && (
                            <Button
                                onPress={closeSearching}
                                textStyle={{ color: '#6c757d' }}
                            >
                                Cancelar
                            </Button>
                        )}
                    </View>


                    {isSearching && <HealthUnitsList healthUnits={healthUnits}/>}
                    {!isSearching && <ClosestsHealthUnits healthUnits={closestsHealthUnits}/>}
                </FormProvider>
            </View>

        </>
    )
}

export default withAuthentication(HomeScreen)