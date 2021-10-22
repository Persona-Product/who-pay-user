/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
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
	return (
		<Stack.Navigator>
			<Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name="Modal1" component={ModalScreenOne} />
				<Stack.Screen name="Modal2" component={ModalScreenTwo} />
			</Stack.Group>
		</Stack.Navigator>
	);
};
