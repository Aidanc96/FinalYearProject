import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";

const LoginPage = ({ history }) => (
	<div>
		<h1>Login Page</h1>
		<LoginForm history={history} />
	</div>
);

export default LoginPage;
