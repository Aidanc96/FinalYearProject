import React from "react";
import LoginForm from "../forms/LoginForm";
import { withRouter } from "react-router-dom";

import { PasswordForgetLink } from "../forms/PasswordForgetForm";

import Header from "../Layouts/Header";

const LoginPage = ({ history }) => (
	<div>
		<Header />
		<div align="center">
			<h1>Login Page</h1>
			<LoginForm history={history} />
			<PasswordForgetLink />
		</div>
	</div>
);

export default withRouter(LoginPage);
