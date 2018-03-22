import React, { Component } from "react";
import { Link } from "react-router-dom";

import { TextField, Button } from "material-ui";
import Paper from "material-ui/Paper";

import { auth } from "../../firebase";

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value
});

const INITIAL_STATE = {
	email: "",
	error: null
};

class PasswordForgetForm extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = event => {
		const { email } = this.state;

		auth
			.doPasswordReset(email)
			.then(() => {
				this.setState(() => ({ ...INITIAL_STATE }));
			})
			.catch(error => {
				this.setState(byPropKey("error", error));
			});

		event.preventDefault();
	};

	render() {
		const { email, error } = this.state;

		const isInvalid = email === "";

		return (
			<div style={styles.container}>
				<Paper align="center" style={styles.forget}>
					<form onSubmit={this.onSubmit}>
						<TextField
							value={this.state.email}
							onChange={event =>
								this.setState(byPropKey("email", event.target.value))
							}
							type="text"
							placeholder="Email Address"
						/>

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
			</div>
		);
	}
}

const PasswordForgetLink = () => (
	<p>
		<Link to="/pw-forget">Forgot Password?</Link>
	</p>
);

export default PasswordForgetForm;

export { PasswordForgetLink };

const styles = {
	container: {
		width: 300,
		margin: "auto"
	},

	forget: {
		padding: 10
	}
};
