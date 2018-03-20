import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import { withRouter, Link } from "react-router-dom";
import { auth } from "../../firebase/index";
import { PasswordForgetLink } from "../forms/PasswordForgetForm";
import * as routes from "../../constants/routes";

const LoginPage = ({ history }) => (
	<div align="center">
		<h1>Login Page</h1>
		<LoginForm history={history} />
		<PasswordForgetLink />
	</div>
);

export default withRouter(LoginPage);
