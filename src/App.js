import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./components/Layouts";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

//class App extends Component {
//render() {
//return (
//	<Fragment>
//	<Header />
//	<Footer />
//</Fragment>
//);
//}

const App = () => (
	<div>
		<Route path="/" exact component={HomePage} />
		<Route path="/login" exact component={LoginPage} />
	</div>
);

export default App;
