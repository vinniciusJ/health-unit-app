import { RecoilRoot } from 'recoil'
import { HealthUnitsMap } from './src/components/health-unit/map'
import { Text } from 'react-native'
import { Suspense } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/home'
import { LoginScreen } from './src/screens/login'
import HealthUnitScreen from './src/screens/health-unit'
import MyHealthUnitScreen from './src/screens/my-health-unit'
import { HealthUnitsList } from './src/screens/health-units-list'
import { HealthUnitType } from './src/schemas/health-unit'

export type ParamsList = {
	login: undefined
	home: undefined
	'health-unit': { healthUnitID: number },
	'my-health-unit': undefined
	ubs: { type: HealthUnitType }
	upa: { type: HealthUnitType }
}

const Stack = createStackNavigator<ParamsList>()

export default function App() {
    return (
		<RecoilRoot>
			<Suspense fallback={<Text>Loading</Text>}>
				<NavigationContainer >
					<Stack.Navigator initialRouteName='login'>
						<Stack.Screen options={{ header: () => null }} name="home" component={HomeScreen} />
						<Stack.Screen options={{ header: () => null }} name="login" component={LoginScreen} />
						<Stack.Screen 
							options={{ header: () => null }} 
							name="health-unit" 
							component={HealthUnitScreen}
							initialParams={{ healthUnitID: 0 }}
						/>
						<Stack.Screen 
							options={{ header: () => null }} 
							name="my-health-unit" 
							component={MyHealthUnitScreen}
						/>
						<Stack.Screen 
							name="ubs" 
							options={{ header: () => null }} 
							component={HealthUnitsList}
							initialParams={{ type: 'UBS' }}
						/>
						<Stack.Screen 
							name="upa" 
							options={{ header: () => null }} 
							component={HealthUnitsList}
							initialParams={{ type: 'UPA' }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Suspense>
		</RecoilRoot>
    )
}

