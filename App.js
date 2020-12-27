import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/reducers/index';
import { Content } from './views/content';
import { GameMenu } from './views/gameMenu';
import { CategoryMenu } from './components/categoryMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted } from './views/firstPage';
import { PinPage } from './views/pinPage';
import { RoundsMenu } from './components/roundsMenu';
const Stack = createStackNavigator();

export const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Content">
					<Stack.Screen
						options={{
							animationEnabled: false,
							headerShown: false
						}}
						name="Content"
						component={Content}
					/>
					<Stack.Screen
						options={{
							animationEnabled: false,
							headerShown: false
						}}
						name="GameMenu"
						component={GameMenu}
					/>
					<Stack.Screen
						options={{
							animationEnabled: false,
							headerShown: false
						}}
						name="GetStarted"
						component={GetStarted}
					/>
					<Stack.Screen
						options={{
							animationEnabled: false,
							headerShown: false
						}}
						name="CategoryMenu"
						component={CategoryMenu}
					/>
					<Stack.Screen
						options={{
							animationEnabled: false,
							headerShown: false
						}}
						name="PinPage"
						component={PinPage}
					/>
					<Stack.Screen
						options={{
							animationEnabled: false,
							headerShown: false
						}}
						name="RoundsMenu"
						component={RoundsMenu}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
