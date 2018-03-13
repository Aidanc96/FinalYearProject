import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";

const LoginPage = () => (
	<div className="login-page">
		<h1>Login Page</h1>
		<LoginForm />
	</div>
);

export default LoginPage;
