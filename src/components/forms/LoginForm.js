import React from "react";
import { TextField, Button } from "material-ui";

class LoginForm extends React.Component {
	state = {
		data: {},
		loading: false,
		errors: {}
	};

	render() {
		return (
			<div>
				<Button variant="raised" color="primary">
					Login
				</Button>
			</div>
		);
	}
}

export default LoginForm;
