import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";

const HomePage = () => (
	<div>
		<h1 align="center">Welcome</h1>
		<Button variant="raised" color="primary" text>
			<Link to="/login">Login</Link>
		</Button>
	</div>
);

export default HomePage;
