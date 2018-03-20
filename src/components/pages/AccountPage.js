import React from "react";
import PropTypes from "prop-types";

import PasswordForgetForm from "../forms/PasswordForgetForm";
import PasswordChangeForm from "../password/PasswordChange";

const AccountPage = (props, { authUser }) => (
	<div align="center">
		<h1>Account Settings</h1>
		<h1>Account: {authUser.email}</h1>
		<br />
		<PasswordChangeForm />
	</div>
);

AccountPage.contextTypes = {
	authUser: PropTypes.object
};

export default AccountPage;
