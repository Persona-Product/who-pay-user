/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import type { VFC } from "react";
import React from "react";
import { Text as DefaultText, View as DefaultView } from "react-native";
import { themes } from "src/constants/Colors";
import { useColorScheme } from "src/hooks/useColorScheme";

export const useThemeColor = (
	props: { light?: string; dark?: string },
	colorName: keyof typeof themes.light & keyof typeof themes.dark
) => {
	const theme = useColorScheme();
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	} else {
		return themes[theme][colorName];
	}
};

type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export const Text: VFC<TextProps> = (props) => {
	const color = useThemeColor({ light: props.lightColor, dark: props.darkColor }, "text");

	return <DefaultText style={[{ color }, props.style]} {...props} />;
};

export const View: VFC<ViewProps> = (props) => {
	const backgroundColor = useThemeColor({ light: props.lightColor, dark: props.darkColor }, "background");

	return <DefaultView style={[{ backgroundColor }, props.style]} {...props} />;
};
