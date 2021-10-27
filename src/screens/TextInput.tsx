import type { VFC } from "react";
import React, { useCallback, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, TextInput, View } from "src/components";
import { onKeyBoardClose } from "src/functions/onKeyBoardClose";
import type { RootTabScreenProps } from "types";

// TabOneScreenの画面
export const Screen: VFC<RootTabScreenProps<"TabOne">> = () => {
	const [state, setState] = useState("");

	const onChangeText = useCallback((text) => {
		setState(text);
	}, []);

	return (
		<>
			<TouchableWithoutFeedback onPress={onKeyBoardClose}>
				<View style={styles.container}>
					<Text style={styles.title}>テキスト入力</Text>

					<View style={styles.separator} lightBgColor="#eee" darkBgColor="rgba(255,255,255,0.1)" />

					<View style={styles.inputWrap} lightBgColor="#c7c7c74f" darkBgColor="#3049634f">
						<TextInput onChangeText={(text) => onChangeText(text)} value={state} placeholder="電話番号入力" />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</>
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
		padding: 10,
		minWidth: "80%",
		borderRadius: 10,
	},
});
