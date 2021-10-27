/* eslint-disable react/destructuring-assignment */
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import type { VFC } from "react";
import React from "react";
import { TextInput as NativeTextInput } from "react-native";
import type { ThemeProps } from "src/components/theme.type";
import { useThemeColor } from "src/hooks/useThemeColor";

export type TextInputProps = ThemeProps & NativeTextInput["props"];

export const CustomTextInput: VFC<TextInputProps> = (props) => {
	const { style, lightTextColor, darkTextColor, ...otherProps } = props;

	const color = useThemeColor({ light: lightTextColor, dark: darkTextColor }, "text");

	return <NativeTextInput style={[{ color }, style]} {...otherProps} />;
};
