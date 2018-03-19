import React, { Component } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layouts";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import AccountPage from "./components/pages/AccountPage";
import LogOutButton from "./components/logOut/logOut.js";

const Navigation = ({ authUser }) => (
	<div>{authUser ? <LoggedInAuth /> : <LogInAuth />}</div>
);

const LoggedInAuth = () => (
	<div>
		<Header />

		<Route path="/" exact component={HomePage} />
		<Route path="/account" exact component={AccountPage} />
		<LogOutButton />
	</div>
);

const LogInAuth = () => (
	<div>
		<Header />

		<Route path="/" exact component={HomePage} />
		<Route path="/login" exact component={LoginPage} />
		<Route path="/register" exact component={RegisterPage} />
	</div>
);
export default Navigation;
