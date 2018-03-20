import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import LogOutButton from "./components/logOut/logOut.js";
import * as routes from "./constants/routes";

const Navigation = (props, { authUser }) => (
	<div>{authUser ? <LoggedInAuth /> : <LogInAuth />}</div>
);

Navigation.contextTypes = {
	authUser: PropTypes.object
};

const LoggedInAuth = () => (
	<ul>
		<li>
			<Link to={routes.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={routes.HOME}>Home</Link>
		</li>
		<li>
			<Link to={routes.ACCOUNT}>Account</Link>
		</li>
		<li>
			<LogOutButton />
		</li>
	</ul>
);

const LogInAuth = () => (
	<ul>
		<li>
			<Link to={routes.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={routes.LOGIN}>Login</Link>
		</li>
	</ul>
);
export default Navigation;
