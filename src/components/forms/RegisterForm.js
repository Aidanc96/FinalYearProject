import React from "react";
import { TextField, Button } from "material-ui";
import { withStyles } from "material-ui/styles";

class RegisterForm extends React.Component {
	state = {
		data: {
			Firstname: "",
			Lastname: "",
			Email: "",
			Username: "",
			Password: ""
		},
		loading: false,
		errors: {}
	};

	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onLogin = () => {
		console.log(this.state);
	};

	render() {
		return (
			<form align="center">
				<TextField
					name="Firstname"
					id="textarea"
					label="First Name"
					placeholder="Enter First Name"
					multiline
					margin="normal"
					value={this.state.Username}
					onChange={e => this.change(e)}
				/>
				<br />
				<TextField
					name="Lastname"
					id="textarea"
					label="Last Name"
					placeholder="Enter Last Name"
					multiline
					margin="normal"
					value={this.state.Username}
					onChange={e => this.change(e)}
				/>
				<br />
				<TextField
					name="Password"
					id="password"
					label="New Password"
					type="password"
					placeholder="Enter New Password"
					autoComplete="current-password"
					margin="normal"
					value={this.state.Password}
					onChange={e => this.change(e)}
				/>
				<br />
				<Button variant="raised" color="primary" onClick={() => this.onLogin()}>
					Register
				</Button>
			</form>
		);
	}
}

export default RegisterForm;
