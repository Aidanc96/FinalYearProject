import React from "react";

import { AppBar, Toolbar, Typography, IconButton } from "material-ui";
import { Link } from "react-router-dom";
import MenuIcon from "material-ui-icons/Menu";

import "../css/Header.css";

import Navigation from "../../Navigation";

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			authUser: null
		};
	}
	render() {
		return (
			<div style={styles.root}>
				<AppBar className="appBar" position="static" color="default">
					<Toolbar>
						<IconButton
							style={styles.menuButton}
							color="inherit"
							aria-label="Menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="title" color="inherit" style={styles.flex}>
							<Link to="/" style={styles.linkHome}>
								AC AutoMotive
							</Link>
						</Typography>
						<Navigation authUser={this.state.authUser} />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

const styles = {
	root: {},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},

	link: {
		color: "inherit",
		textDecoration: "none"
	},

	linkHome: {
		color: "inherit",
		textDecoration: "none"
	}
};
