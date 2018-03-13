import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layouts";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

const App = () => (
	<div>
		<Header />

		<Route path="/" exact component={HomePage} />
		<Route path="/login" exact component={LoginPage} />
		<Route path="/register" exact component={RegisterPage} />
		<Footer />
	</div>
);

export default App;
