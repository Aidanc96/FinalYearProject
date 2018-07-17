import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import LogOutButton from "./components/logOut/logOut.js";
import * as routes from "./constants/routes";

import { Button } from "material-ui";

const Navigation = (props, { authUser }) => (
	<div>{authUser ? <LoggedInAuth /> : <LogInAuth />}</div>
);

Navigation.contextTypes = {
	authUser: PropTypes.object
};

const LoggedInAuth = () => (
	<div style={styles.menu}>
		<Link to={routes.HOME} style={styles.link}>
			<Button variant="raised" color="default">
				Home
			</Button>
		</Link>

		<Link to={routes.ACCOUNT} style={styles.link}>
			<Button variant="raised" color="default">
				Account
			</Button>
		</Link>

		<LogOutButton />
	</div>
);

const LogInAuth = () => (
	<div>
		<Link to={routes.LANDING} style={styles.link}>
			<Button variant="raised" color="default">
				Welcome
			</Button>
		</Link>

		<Link to={routes.LOGIN} style={styles.link}>
			<Button variant="raised" color="secondary">
				Login
			</Button>
		</Link>
	</div>
);

export default Navigation;

const styles = {
	link: {
		color: "inherit",
		textDecoration: "none"
	},
	menu: {
		display: "flex",
		flexDirection: "row"
	}
};
