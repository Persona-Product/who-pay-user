/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { ComponentProps, VFC } from "react";
import React, { useCallback } from "react";
import { Pressable } from "react-native";
import { themes } from "src/constants/Colors";
import { useColorScheme } from "src/hooks/useColorScheme";
import { TabOneScreen } from "src/screens/TabOneScreen";
import { TabThreeScreen } from "src/screens/TabThreeScreen";
import { TabTwoScreen } from "src/screens/TabTwoScreen";
import type { RootTabParamList, RootTabScreenProps } from "types";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator: VFC = () => {
	const colorScheme = useColorScheme();

	const onScreenPush = useCallback((navigation, screen) => {
		// navigation.replace で右から画面が出てくる
		// navigation.replace(screen);

		// navigation.navigate で下からモーダルが開く
		navigation.navigate(screen);
	}, []);

	return (
		<BottomTab.Navigator
			// 最初の画面を指定
			initialRouteName="TabOne"
			screenOptions={{
				tabBarActiveTintColor: themes[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneScreen}
				options={{
					// tabBarBadge: 20, // バッチの文字
					// tabBarBadgeStyle: {
					// 	color: "red", // バッチの文字色
					// 	backgroundColor: "blue", // バッチの背景色
					// },
					// tabBarShowLabel: false, // タブのタイトルをつけるか
					title: "Tab One",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					// ヘッダーの左側にアイコンとか設定できる
				}}
			/>

			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoScreen}
				options={({ navigation }: RootTabScreenProps<"TabTwo">) => ({
					title: "Tab Two",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					// ヘッダーの右側にアクション用のボタンとか設定できる
					headerRight: () => (
						<Pressable
							// クリックしたらモーダルが開く
							onPress={() => onScreenPush(navigation, "Modal1")}
							// 押している時にスタイルを変更できる
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<FontAwesome name="info-circle" size={25} color={themes[colorScheme].icon} style={{ marginRight: 15 }} />
						</Pressable>
					),
				})}
			/>

			<BottomTab.Screen
				name="TabThree"
				component={TabThreeScreen}
				options={({ navigation }: RootTabScreenProps<"TabThree">) => ({
					title: "Tab Three",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					headerLeft: () => (
						<Pressable
							// クリックしたらモーダルが開く
							onPress={() => onScreenPush(navigation, "Modal2")}
							// 押している時にスタイルを変更できる
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<AntDesign name="pluscircle" size={25} color={themes[colorScheme].icon} style={{ marginLeft: 15 }} />
						</Pressable>
					),
				})}
			/>
		</BottomTab.Navigator>
	);
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

const TabBarIcon = (props: { name: ComponentProps<typeof FontAwesome>["name"]; color: string }) => {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
