import React, { Component } from "react";
import RegisterForm from "../forms/RegisterForm";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase/index";

import * as routes from "../../constants/routes";

const RegisterPage = ({ history }) => (
	<div>
		<h1>Register Page</h1>
		<RegisterForm history={history} />
	</div>
);

export default withRouter(RegisterPage);
