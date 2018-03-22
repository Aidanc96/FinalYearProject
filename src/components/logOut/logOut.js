import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/index";
import * as routes from "../../constants/routes";
import { Button } from "material-ui";

class LogOut extends React.Component {
	constructor(props) {
		super(props);
	}

	onClick = event => {
		const { history } = this.props;

		auth.doSignOut();
		history.push(routes.LOGIN);
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<Button
					variant="raised"
					color="secondary"
					type="button"
					onClick={this.onClick}
				>
					Logout
				</Button>
			</div>
		);
	}
}

export default withRouter(LogOut);
