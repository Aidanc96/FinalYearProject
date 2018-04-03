import React, { Component } from "react";

import { TextField, Button } from "material-ui";
import Paper from "material-ui/Paper";

import { auth } from "../../firebase/firebase";

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value
});

const INITIAL_STATE = {
	passwordOne: "",
	passwordTwo: "",
	error: null
};

class PasswordChangeForm extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = event => {
		const { passwordOne } = this.state;

		auth
			.doPasswordUpdate(passwordOne)
			.then(() => {
				this.setState(() => ({ ...INITIAL_STATE }));
			})
			.catch(error => {
				this.setState(byPropKey("error", error));
			});

		event.preventDefault();
	};

	render() {
		const { passwordOne, passwordTwo, error } = this.state;

		const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

		return (
			<Paper style={styles.change}>
				<form onSubmit={this.onSubmit} align="center">
					<p>Change Password</p>
					<TextField
						value={passwordOne}
						onChange={event =>
							this.setState(byPropKey("passwordOne", event.target.value))
						}
						autoComplete="current-password"
						margin="normal"
						type="password"
						placeholder="New Password"
					/>

					<br />

					<TextField
						value={passwordTwo}
						onChange={event =>
							this.setState(byPropKey("passwordTwo", event.target.value))
						}
						autoComplete="current-password"
						margin="normal"
						type="password"
						placeholder="Confirm New Password"
						helperText="Minimum of 6 characters"
					/>

					<br />

					<Button
						variant="raised"
						color="primary"
						disabled={isInvalid}
						type="submit"
					>
						Reset My Password
					</Button>

					{error && <p>{error.message}</p>}
				</form>
			</Paper>
		);
	}
}

export default PasswordChangeForm;

const styles = {
	change: {
		position: "absolute",
		width: 300,
		padding: 20,
		left: "80%",
		top: "65%"
	}
};
