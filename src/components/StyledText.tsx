import React from "react";
import type { TextProps } from "src/components/Themed";
import { Text } from "src/components/Themed";

export const MonoText = (props: TextProps) => {
	return <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />;
};
