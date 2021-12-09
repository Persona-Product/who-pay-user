/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import React, { useCallback, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { ColorButton, Text, TextInput, View } from "src/components/custom";
import { onKeyBoardClose } from "src/functions/onKeyBoardClose";
import type { RootTabScreenProps } from "types";

// TabOneScreenの画面
export const TabOneScreen: VFC<RootTabScreenProps<"TabOne">> = () => {
	const [state, setState] = useState("");

	const onChangeText = useCallback((text) => {
		setState(text);
	}, []);

	const onRequest = async () => {
		const result = await fetch("http://localhost:4000/auth/signup", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phone: state,
				password: "ndfaabvklkkvfakndj",
			}),
		});
		console.log(result);
	};
	return (
		<TouchableWithoutFeedback onPress={onKeyBoardClose}>
			<View style={styles.container}>
				<Text style={styles.title}>サインイン</Text>

				<View style={styles.separator} lightBgColor="#eee" darkBgColor="rgba(255,255,255,0.1)" />

				<TextInput
					bgStyle={styles.inputWrap}
					onChangeText={(text) => onChangeText(text)}
					value={state}
					placeholder="電話番号入力"
				/>

				<ColorButton
					textStyle={styles.buttonLabel}
					bgStyle={styles.button}
					lightBgColor="#4882ff"
					darkBgColor="#ff8c00"
					onPress={onRequest}
					title="ボタン"
				/>
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
	inputWrap: {
		minWidth: "80%",
		padding: 10,
		borderRadius: 10,
	},
	buttonLabel: {
		fontSize: 20,
	},
	button: {
		// boxShadow
		shadowColor: "#656565a2",
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 5,
		shadowOpacity: 0.6,
	},
});
