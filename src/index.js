import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<App />
	</Router>,

	document.getElementById("root")
);

registerServiceWorker();
