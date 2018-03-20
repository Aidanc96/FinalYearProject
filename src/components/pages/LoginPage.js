import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import { withRouter, Link } from "react-router-dom";
import { auth } from "../../firebase/index";

import * as routes from "../../constants/routes";

const LoginPage = ({ history }) => (
	<div>
		<h1>Login Page</h1>
		<LoginForm history={history} />
	</div>
);

export default withRouter(LoginPage);
