import React from "react";
import RegisterForm from "../forms/RegisterForm";
import { withRouter } from "react-router-dom";

import Header from "../Layouts/Header";

const RegisterPage = ({ history }) => (
	<div>
		<Header />
		<div>
			<h1 align="center">Register Page</h1>
			<RegisterForm history={history} />
		</div>
	</div>
);

export default withRouter(RegisterPage);
