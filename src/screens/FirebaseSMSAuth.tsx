import type { VFC } from "react";
import React, { useCallback, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, TextInput, View } from "src/components";
import { onKeyBoardClose } from "src/functions/onKeyBoardClose";
import type { RootTabScreenProps } from "types";

// TabOneScreenの画面
export const TabOneScreen: VFC<RootTabScreenProps<"TabOne">> = () => {
	const [phoneNumber, setPhoneNumber] = useState("");

	const onChangeText = useCallback((text) => {
		setPhoneNumber(text);
	}, []);

	return (
		<TouchableWithoutFeedback onPress={onKeyBoardClose}>
			<View style={styles.container}>
				<Text style={styles.title}>認証画面</Text>

				<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

				<Text style={styles.label}>電話番号</Text>

				<View style={styles.inputWrap} lightColor="#c7c7c74f" darkColor="#3049634f">
					<TextInput onChangeText={(text) => onChangeText(text)} value={phoneNumber} placeholder="電話番号入力" />
				</View>

				<Text style={styles.label}>確認コード</Text>

				<View style={styles.inputWrap} lightColor="#c7c7c74f" darkColor="#3049634f">
					<TextInput onChangeText={(text) => onChangeText(text)} value={phoneNumber} placeholder="電話番号入力" />
				</View>
			</View>
		</TouchableWithoutFeedback>
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
	label: {
		width: "80%",
		textAlign: "left",
		paddingTop: 15,
		paddingBottom: 15,
	},
	inputWrap: {
		padding: 10,
		minWidth: "80%",
		borderRadius: 10,
	},
});
