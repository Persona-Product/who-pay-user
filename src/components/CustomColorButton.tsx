/* eslint-disable react/destructuring-assignment */
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import type { VFC } from "react";
import React from "react";
import { StyleSheet, TouchableOpacity as NativeTouchableOpacity } from "react-native";
import type { TextProps } from "src/components/CustomText";
import { CustomText } from "src/components/CustomText";
import type { ThemeProps } from "src/components/theme.type";
import { useThemeColor } from "src/hooks/useThemeColor";

export type ColorButtonProps = ThemeProps &
	TextProps &
	NativeTouchableOpacity["props"] & {
		title: string;
	};

export const CustomColorButton: VFC<ColorButtonProps> = (props) => {
	const {
		// TextProps,
		lightTextColor,
		darkTextColor,
		children,
		textStyle,
		title,
		// TouchableOpacityProps
		bgStyle,
		lightBgColor,
		darkBgColor,
		onPress,
	} = props;

	const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "background");

	return (
		<NativeTouchableOpacity
			style={[{ backgroundColor }, bgStyle, styles.default]}
			activeOpacity={0.2}
			onPress={onPress}
		>
			{children}

			<CustomText lightTextColor={lightTextColor} darkTextColor={darkTextColor} style={textStyle}>
				{title}
			</CustomText>
		</NativeTouchableOpacity>
	);
};

const styles = StyleSheet.create({
	default: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",

		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 9999,
	},
});
