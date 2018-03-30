import React from "react";
import LoginForm from "../forms/LoginForm";
import { withRouter } from "react-router-dom";

import { PasswordForgetLink } from "../forms/PasswordForgetForm";

const LoginPage = ({ history }) => (
	<div align="center">
		<h1>Login Page</h1>
		<LoginForm history={history} />
		<PasswordForgetLink />
	</div>
);

export default withRouter(LoginPage);
