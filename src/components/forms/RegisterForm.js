import React, { Component } from "react";
import { TextField, Button } from "material-ui";
import Paper from "material-ui/Paper";
import { Link, withRouter } from "react-router-dom";

import { auth } from "../../firebase/index";

const INITIAL_STATE = {
	username: "",
	email: "",
	passwordOne: "",
	passwordTwo: "",
	error: null
};

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value
});

class RegisterForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onRegister = event => {
		const { username, email, passwordOne } = this.state;

		const { history } = this.props;

		auth
			.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then(authUser => {
				this.setState(() => ({ ...INITIAL_STATE }));
				history.push("./Login");
			})
			.catch(error => {
				this.setState(byPropKey("error", error));
			});
		event.preventDefault();
	};

	render() {
		const { username, email, passwordOne, passwordTwo, error } = this.state;

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === "" ||
			email === "" ||
			username === "";

		return (
			<div style={styles.container}>
				<Paper style={styles.paper}>
					<form align="center" onRegister={this.onRegister}>
						<TextField
							id="username"
							label="UserName"
							placeholder="Enter UserName"
							multiline
							margin="normal"
							value={this.state.Username}
							onChange={event =>
								this.setState(byPropKey("username", event.target.value))
							}
						/>
						<br />
						<TextField
							id="email-text"
							label="Email"
							placeholder="Enter Email"
							multiline
							margin="normal"
							value={this.state.Username}
							onChange={event =>
								this.setState(byPropKey("email", event.target.value))
							}
						/>
						<br />
						<TextField
							id="passwordOne"
							label="New Password"
							type="password"
							placeholder="Enter New Password"
							autoComplete="current-password"
							margin="normal"
							value={this.state.Password}
							onChange={event =>
								this.setState(byPropKey("passwordOne", event.target.value))
							}
						/>
						<br />
						<TextField
							id="passwordTwo"
							label="RE-Enter New Password"
							type="password"
							placeholder="RE-Enter New Password"
							autoComplete="current-password"
							margin="normal"
							value={this.state.Password}
							onChange={event =>
								this.setState(byPropKey("passwordTwo", event.target.value))
							}
						/>
						<br />
						<Button
							variant="raised"
							color="primary"
							type="submit"
							disabled={isInvalid}
							onClick={() => this.onRegister()}
						>
							Register
						</Button>

						{error && <p>{error.message}</p>}
					</form>
				</Paper>
			</div>
		);
	}
}

export default withRouter(RegisterForm);

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
