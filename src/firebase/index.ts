import "firebase/storage";
import "firebase/auth";

import * as firebase from "firebase";

import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const Firebase = firebase;

export const auth = firebase.auth();
export const storage = firebase.storage();
