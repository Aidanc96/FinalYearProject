import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layouts";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
	<div>
		<Header />

		<Footer />

		<Route path="/" exact component={HomePage} />
		<Route path="/login" exact component={LoginPage} />
	</div>
);

export default App;
