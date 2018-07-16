import React from "react";

import PasswordForgetForm from "../forms/PasswordForgetForm";

import Header from "../Layouts/Header";

const PasswordForgetPage = () => (
	<div>
		<Header />
		<div>
			<h1 align="center">PasswordForget</h1>
			<PasswordForgetForm />
		</div>
	</div>
);

export default PasswordForgetPage;
