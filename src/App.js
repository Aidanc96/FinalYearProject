import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import LandingPage from "./components/pages/LandingPage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import PasswordForgetPage from "./components/password/PasswordForgetPage";
import HomePage from "./components/pages/HomePage";
import AccountPage from "./components/pages/AccountPage";

import * as routes from "./constants/routes";
import withAuthentication from "./components/authentication/withAuthentication";

const App = () => (
	<Router>
		<div>
			<Navigation />

			<hr />

			<Route exact path={routes.LANDING} component={() => <LandingPage />} />
			<Route exact path={routes.REGISTER} component={() => <RegisterPage />} />
			<Route exact path={routes.LOGIN} component={() => <LoginPage />} />
			<Route
				exact
				path={routes.PASSWORD_FORGET}
				component={() => <PasswordForgetPage />}
			/>
			<Route exact path={routes.HOME} component={() => <HomePage />} />
			<Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
		</div>
	</Router>
);

export default withAuthentication(App);
