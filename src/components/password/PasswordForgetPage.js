import React from "react";

import PasswordForgetForm from "../forms/PasswordForgetForm";

import Header from "../Layouts/Header";
import "../css/passwordForgetPage.css";
import Typography from "@material-ui/core/Typography";

const PasswordForgetPage = () => (
	<div>
		<Header />
		<div align="center" className="passwordForgetPage">
			<Typography variant="display2" color="default">
				Reset Password
			</Typography>

			<PasswordForgetForm />
		</div>
	</div>
);

export default PasswordForgetPage;
