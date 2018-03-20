import React from "react";
import PropTypes from "prop-types";

import PasswordForgetForm from "../forms/PasswordForgetForm";
import PasswordChangeForm from "../password/PasswordChange";

const AccountPage = (props, { authUser }) => (
	<div>
		<h1 align="center">Account Settings</h1>
		<h1>Account: {authUser.email}</h1>
		<PasswordForgetForm />
		<PasswordChangeForm />
	</div>
);

AccountPage.contextTypes = {
	authUser: PropTypes.object
};

export default AccountPage;
