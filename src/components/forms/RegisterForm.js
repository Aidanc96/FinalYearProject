import React from "react";
import { TextField, Button } from "material-ui";
import Paper from "material-ui/Paper";
import { withRouter } from "react-router-dom";

import { auth, db } from "../../firebase";

import * as routes from "../../constants/routes";

const INITIAL_STATE = {
	username: "",
	email: "",
	avatarURL: "",
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

	onSubmit = event => {
		const { username, email, passwordOne, avatarURL } = this.state;

		const { history } = this.props;

		auth
			.CreateUser(email, passwordOne)
			.then(authUser => {
				db
					.doCreateUser(authUser.uid, username, email, avatarURL)
					.then(() => {
						this.setState(() => ({ ...INITIAL_STATE }));
						history.push(routes.HOME);
					})
					.catch(error => {
						this.setState(byPropKey("error", error));
					});
			})
			.catch(error => {
				this.setState(byPropKey("error", error));
			});
		event.preventDefault();
		console.log(JSON.stringify());
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
					<form onSubmit={this.onSubmit} align="center">
						<TextField
							style={styles.username}
							id="username"
							label="UserName"
							placeholder="Enter UserName"
							multiline
							margin="normal"
							value={username}
							onChange={event =>
								this.setState(byPropKey("username", event.target.value))
							}
						/>
						<br />
						<TextField
							style={styles.email}
							id="email-text"
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
							style={styles.passwordOne}
							id="passwordOne"
							label="New Password"
							type="password"
							placeholder="Enter New Password"
							autoComplete="current-password"
							margin="normal"
							value={passwordOne}
							onChange={event =>
								this.setState(byPropKey("passwordOne", event.target.value))
							}
						/>
						<br />
						<TextField
							style={styles.passwordTwo}
							id="passwordTwo"
							label="RE-Enter New Password"
							type="password"
							placeholder="RE-Enter New Password"
							autoComplete="current-password"
							margin="normal"
							value={passwordTwo}
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
	},
	username: {
		width: 200
	},
	email: {
		width: 200
	},
	passswordOne: {
		width: 200
	},
	passwordTwo: {
		width: 200
	}
};
