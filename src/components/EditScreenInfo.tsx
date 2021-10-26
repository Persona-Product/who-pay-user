import * as WebBrowser from "expo-web-browser";
import type { VFC } from "react";
import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "src/components";
import { MonoText } from "src/components/StyledText";
import { themes } from "src/constants/Colors";

export const EditScreenInfo: VFC<{ path: string }> = (props) => {
	// アプリ内でWEBブラウザを立ち上げる
	const onHelpPress = useCallback(() => {
		WebBrowser.openBrowserAsync(
			"https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
		);
	}, []);

	return (
		<View>
			<View style={styles.getStartedContainer}>
				<View
					style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
					darkColor="rgba(255,255,255,0.05)"
					lightColor="rgba(0,0,0,0.05)"
				>
					<MonoText>{props.path}</MonoText>
				</View>

				<Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
					{"<Text>これで文字が表示できるよ</Text>"}
				</Text>
			</View>

			<View style={styles.helpContainer}>
				{/* アプリ内でWEBブラウザを立ち上げる */}
				<TouchableOpacity onPress={onHelpPress} style={styles.helpLink}>
					<Text style={styles.helpLinkText} lightColor={themes.light.tint}>
						アプリ内でWEBブラウザを開く
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	getStartedContainer: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightContainer: {
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: "center",
	},
	helpContainer: {
		marginTop: 15,
		marginHorizontal: 20,
		alignItems: "center",
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		textAlign: "center",
	},
});
