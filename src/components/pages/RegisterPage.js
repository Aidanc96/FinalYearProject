import React from "react";
import RegisterForm from "../forms/RegisterForm";
import { withRouter } from "react-router-dom";

const RegisterPage = ({ history }) => (
	<div>
		<h1 align="center">Register Page</h1>
		<RegisterForm history={history} />
	</div>
);

export default withRouter(RegisterPage);
