import { RecoilRoot } from 'recoil'
import { HealthUnitsMap } from './src/components/map'
import { Text } from 'react-native'
import { Suspense } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/home'
import { LoginScreen } from './src/screens/login'
import HealthUnitScreen from './src/screens/health-unit'

export type ParamsList = {
	login: undefined
	home: undefined
	'health-unit': { healthUnitID: number } 
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
					</Stack.Navigator>
				</NavigationContainer>
			</Suspense>
		</RecoilRoot>
    )
}

