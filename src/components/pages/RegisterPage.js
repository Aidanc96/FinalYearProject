import React from "react";
import RegisterForm from "../forms/RegisterForm";
import { withRouter } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Header from "../Layouts/Header";
import "../css/registerPage.css";

const RegisterPage = ({ history }) => (
	<div>
		<Header />
		<div align="center" className="registerPage">
			<Typography variant="display2" color="default">
				Register
			</Typography>

			<RegisterForm history={history} />
		</div>
	</div>
);

export default withRouter(RegisterPage);
