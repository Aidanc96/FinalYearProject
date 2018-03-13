import React from "react";
import { TextField, Button } from "material-ui";
import { withStyles } from "material-ui/styles";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
	state = {
		data: {
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
			<Paper elevation={4}>
				<form align="center">
					<TextField
						name="Username"
						id="textarea"
						label="UserName"
						placeholder="Enter UserName"
						multiline
						margin="normal"
						value={this.state.Username}
						onChange={e => this.change(e)}
					/>
					<br />
					<TextField
						name="Password"
						id="password"
						label="Password"
						type="password"
						placeholder="Enter Password"
						autoComplete="current-password"
						margin="normal"
						value={this.state.Password}
						onChange={e => this.change(e)}
					/>
					<br />
					<Button
						variant="raised"
						color="primary"
						onClick={() => this.onLogin()}
					>
						Login
					</Button>
					<Button variant="raised" color="secondary">
						<Link to="/register">Register</Link>
					</Button>
				</form>
			</Paper>
		);
	}
}
export default LoginForm;
