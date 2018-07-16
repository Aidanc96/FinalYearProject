import React from "react";

import LandingFeedDisplay from "../feed/landingFeedDisplay";
import { Link } from "react-router-dom";

import bgVideo from "../backgroundImage/mountain_car_edit.mp4";
import "../css/landingPage.css";

import Button from "material-ui/Button";

import Header from "../Layouts/Header";

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<video className="welcomeVideo" loop autoPlay muted>
					<source src={bgVideo} type="video/mp4" />
				</video>

				<div className="welcome" align="center">
					<h1 className="welcomeText">AC AutoMotive</h1>

					<Button className="welcomeBtn">
						<Link
							className="welcomeBtnTxt"
							to="/login"
							style={styles.registerBtn}
						>
							LogIn
						</Link>
					</Button>
				</div>
			</div>
		);
	}
}

export default LandingPage;

const styles = {};
