import { db, auth } from "./firebase";

export const CreateUser = (email, password) =>
	auth.createUserWithEmailAndPassword(email, password);

export const SignInUser = (email, password) =>
	auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => auth.signOut();

export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = password =>
	auth.currentUser.updatePassword(password);
