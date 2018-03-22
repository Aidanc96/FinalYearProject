import React from "react";
import PropTypes from "prop-types";
import withAuthorization from "../authorization/withAuthorization";

const HomePage = () => (
	<div>
		<h1 align="center">Profile</h1>
		<p align="center">This can be seen by logged in users</p>
	</div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
