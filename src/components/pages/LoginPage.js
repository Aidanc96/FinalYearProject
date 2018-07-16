import React from "react";
import LoginForm from "../forms/LoginForm";
import { withRouter } from "react-router-dom";

import { PasswordForgetLink } from "../forms/PasswordForgetForm";

import Header from "../Layouts/Header";
import "../css/logInPage.css";
import Typography from "@material-ui/core/Typography";

const LoginPage = ({ history }) => (
	<div>
		<Header />
		<div align="center" className="logInPage">
			<Typography variant="display2" color="default">
				Login Page
			</Typography>

			<LoginForm history={history} />
			<PasswordForgetLink />
		</div>
	</div>
);

export default withRouter(LoginPage);
