import React from "react";
import { TextField, Button } from "material-ui";
import Paper from "material-ui/Paper";

export default class RegisterForm extends React.Component {
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

	onRegister = () => {
		console.log(this.state);
	};

	render() {
		return (
			<div style={styles.container}>
				<Paper style={styles.paper}>
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
						<Button
							variant="raised"
							color="primary"
							onClick={() => this.onRegister()}
						>
							Register
						</Button>
					</form>
				</Paper>
			</div>
		);
	}
}

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
