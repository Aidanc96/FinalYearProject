import React, { Component } from "react";
import { TextField, Button } from "material-ui";
import { withRouter, Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import { auth } from "../../firebase/index";

import * as routes from "../../constants/routes";

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value
});

const INITIAL_STATE = {
	email: "",
	password: "",
	error: null
};

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = event => {
		const { email, password } = this.state;

		const { history } = this.props;

		auth
			.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState(() => ({ ...INITIAL_STATE }));
				history.push("routes.Home");
			})
			.catch(error => {
				this.setState(byPropKey("error", error));
			});
		event.preventDefault();
	};

	render() {
		const { email, password, error } = this.state;

		const isInvalid = password === "" || email === "";

		return (
			<div style={styles.container}>
				<Paper elevation={4} style={styles.paper}>
					<form align="center" onSubmit={this.onSubmit}>
						<TextField
							id="Email"
							label="Email"
							placeholder="Enter Email"
							multiline
							margin="normal"
							value={email}
							onChange={event =>
								this.setState(byPropKey("email", event.target.value))
							}
						/>
						<br />
						<TextField
							id="password"
							label="Password"
							type="password"
							placeholder="Enter Password"
							autoComplete="current-password"
							margin="normal"
							value={password}
							onChange={event =>
								this.setState(byPropKey("password", event.target.value))
							}
						/>
						<br />
						<Button
							variant="raised"
							color="primary"
							disabled={isInvalid}
							type="submit"
						>
							Login
						</Button>
						<Button variant="raised" color="secondary">
							<Link to="/register" style={styles.registerBtn}>
								Register
							</Link>
						</Button>

						{error && <p>{error.message}</p>}
					</form>
				</Paper>
			</div>
		);
	}
}

export default LoginForm;

const styles = {
	container: {
		width: 300,
		margin: "auto"
	},
	paper: {
		padding: 20
	},
	registerBtn: {
		textDecoration: "none",
		color: "white"
	}
};
