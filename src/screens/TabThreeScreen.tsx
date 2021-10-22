import type { VFC } from "react";
import React from "react";
import { StyleSheet } from "react-native";
import { EditScreenInfo } from "src/components/EditScreenInfo";
import { Text, View } from "src/components/Themed";
import type { RootTabScreenProps } from "types";

// TabThreeScreenの画面
export const TabThreeScreen: VFC<RootTabScreenProps<"TabThree">> = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab Three</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabThreeScreen.tsx" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});