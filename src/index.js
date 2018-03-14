import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as firebase from "firebase";

var config = {
	apiKey: "AIzaSyAi39N_YePWXuPf-hwHdY1Xo-0PceEb2u8",
	authDomain: "ac-automotive.firebaseapp.com",
	databaseURL: "https://ac-automotive.firebaseio.com",
	projectId: "ac-automotive",
	storageBucket: "",
	messagingSenderId: "383961438871"
};
firebase.initializeApp(config);

ReactDOM.render(
	<MuiThemeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MuiThemeProvider>,
	document.getElementById("root")
);

registerServiceWorker();
