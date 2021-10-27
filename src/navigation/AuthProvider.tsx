import type { User } from "firebase";
import type { ReactNode } from "react";
import React, { createContext, useState } from "react";

type ContextProps = {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type Props = {
	children: ReactNode;
};

export const AuthUserContext = createContext({} as ContextProps);

export const AuthUserProvider: React.FC<Props> = (props) => {
	const [user, setUser] = useState<User | null>(null);

	return <AuthUserContext.Provider value={{ user, setUser }}>{props.children}</AuthUserContext.Provider>;
};
