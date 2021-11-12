import type { Dispatch, SetStateAction, VFC } from "react";
import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { ColorButton, Text, TextInput, View } from "src/components";

// モーダルを開いた時の画面（下から出てくるやつ）
export const SigninScreen: VFC = () => {
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const onChangeText = useCallback((text: string, setStateAction: Dispatch<SetStateAction<string>>) => {
		setStateAction(text);
	}, []);

	const onSignin = useCallback((phone: string, password: string) => {
		console.info(phone, password);
	}, []);

	const onSignup = useCallback(() => {
		console.info("サインアップ");
	}, []);

	return (
		<View style={styles.root}>
			<Text style={inputStyles.label}>電話番号</Text>
			<TextInput
				bgStyle={inputStyles.bg}
				onChangeText={(text) => onChangeText(text, setPhone)}
				value={phone}
				placeholder=""
			/>

			<Text style={inputStyles.label}>パスワード</Text>
			<TextInput
				bgStyle={inputStyles.bg}
				onChangeText={(text) => onChangeText(text, setPassword)}
				value={password}
				placeholder=""
			/>

			<ColorButton
				textStyle={buttonStyles.text}
				lightTextColor="#ffffff"
				darkTextColor="#ffffff"
				bgStyle={buttonStyles.button}
				lightBgColor="#4882ff"
				darkBgColor="#3575ff"
				outlineStyle={buttonStyles.outline}
				title="サインイン"
				onPress={() => onSignin(phone, password)}
			/>

			<ColorButton
				textStyle={buttonStyles.text}
				lightTextColor="#ffffff"
				darkTextColor="#ffffff"
				bgStyle={buttonStyles.button}
				lightBgColor="#ffbb46"
				darkBgColor="#ffb433"
				outlineStyle={buttonStyles.outline}
				title="サインアップ"
				onPress={onSignup}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

const inputStyles = StyleSheet.create({
	label: {
		paddingVertical: 10,
		fontSize: 15,
		fontWeight: "bold",
		textAlignVertical: "center",
	},
	bg: {
		borderRadius: 10,
	},
});

export const buttonStyles = StyleSheet.create({
	outline: { marginTop: 20 },
	text: {},
	button: {},
});
