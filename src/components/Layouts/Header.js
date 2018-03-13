import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, IconButton, Button } from "material-ui";
import { Link } from "react-router-dom";
import MenuIcon from "material-ui-icons/Menu";
import { withStyles } from "material-ui/styles";
import "../css/Header.css";

export default class Header extends React.Component {
	render() {
		return (
			<div style={styles.root}>
				<AppBar className="appBar" position="static">
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
						<Button variant="raised" color="primary">
							<Link to="/login" style={styles.link}>
								Login
							</Link>
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

const styles = {
	root: {
		flexGrow: 1
	},
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
