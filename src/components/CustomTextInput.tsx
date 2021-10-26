/* eslint-disable react/destructuring-assignment */
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import type { VFC } from "react";
import React from "react";
import { TextInput as DefaultTextInput } from "react-native";
import type { ThemeProps } from "src/components/theme.type";
import { useThemeColor } from "src/hooks/useThemeColor";

export type TextInputProps = ThemeProps & DefaultTextInput["props"];

export const CustomTextInput: VFC<TextInputProps> = (props) => {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	return <DefaultTextInput style={[{ color }, style]} {...otherProps} />;
};
