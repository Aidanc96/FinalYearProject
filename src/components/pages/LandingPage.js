import React from "react";

import LandingFeedDisplay from "../feed/landingFeedDisplay";
import { Link } from "react-router-dom";

import "../css/landingPage.css";

import Button from "material-ui/Button";

import Background from "../backgroundImage/newYork.jpg";

class LandingPage extends React.Component {
	render() {
		return (
			<div align="center">
				<h1>Welcome</h1>
				<LandingFeedDisplay />
				<Button>
					<Link to="/login" style={styles.registerBtn}>
						LogIn
					</Link>
				</Button>
			</div>
		);
	}
}

export default LandingPage;

const styles = {};
