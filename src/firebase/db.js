import { db } from "./firebase";

export const doCreateUser = (id, username, email, avatarURL) =>
	db.ref(`users/${id}`).set({
		username,
		email,
		avatarURL
	});

export const onceGetUsers = () => db.ref("users").once("value");

export const onceGetPosts = () => db.ref("postsing").once("value");

export const doCreatePostUser = (
	id,
	username,
	photoURL,
	avatarURL,
	postMessage
) =>
	db.ref(`posts/${id}`).set({
		username,
		photoURL,
		avatarURL,
		postMessage
	});
