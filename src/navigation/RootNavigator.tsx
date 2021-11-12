/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { themes } from "src/constants/Colors";
import { useColorScheme } from "src/hooks/useColorScheme";
import { BottomTabNavigator } from "src/navigation/BottomTabNavigator";
import { ModalScreenOne } from "src/screens/ModalScreenOne";
import { ModalScreenTwo } from "src/screens/ModalScreenTwo";
import { NotFoundScreen } from "src/screens/NotFoundScreen";
import type { RootStackParamList } from "types";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const colorScheme = useColorScheme();

	return (
		<Stack.Navigator>
			<Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen
					name="Modal1"
					options={() => ({
						headerStyle: {
							backgroundColor: themes[colorScheme].backgroundSub,
						},
					})}
					component={ModalScreenOne}
				/>
				<Stack.Screen
					name="Modal2"
					options={() => ({
						headerStyle: {
							backgroundColor: themes[colorScheme].backgroundSub,
						},
					})}
					component={ModalScreenTwo}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};
