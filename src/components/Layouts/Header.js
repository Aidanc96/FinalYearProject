import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, IconButton, Button } from "material-ui";
import { Link } from "react-router-dom";
import MenuIcon from "material-ui-icons/Menu";
import { withStyles } from "material-ui/styles";
import "../css/Header.css";

const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	},
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
});

function Header(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar className="appBar" position="static">
				<Toolbar>
					<IconButton
						className={classes.menuButton}
						color="inherit"
						aria-label="Menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="title" color="inherit" className={classes.flex}>
						<Link to="/" className={classes.linkHome}>
							AC AutoMotive
						</Link>
					</Typography>
					<Button variant="raised" color="primary" className={classes.button}>
						<Link to="/login" className={classes.link}>
							Login
						</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
