import * as firebase from "firebase";

var config = {
	apiKey: "AIzaSyAi39N_YePWXuPf-hwHdY1Xo-0PceEb2u8",
	authDomain: "ac-automotive.firebaseapp.com",
	databaseURL: "https://ac-automotive.firebaseio.com",
	projectId: "ac-automotive",
	storageBucket: "",
	messagingSenderId: "383961438871"
};
if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth, firebase };