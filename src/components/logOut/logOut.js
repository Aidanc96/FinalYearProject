import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/index";
import * as routes from "../../constants/routes";

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
				<button type="button" onClick={this.onClick}>
					Logout
				</button>
			</div>
		);
	}
}

export default withRouter(LogOut);
