import React from "react";

import LandingFeedDisplay from "../feed/landingFeedDisplay";
import { Link } from "react-router-dom";

//import bgVideo from "../backgroundImage/mountain_car_edit.mp4";
import bgVideo from "../backgroundImage/Only_You_(Car__Edit).mp4";
import "../css/landingPage.css";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Header from "../Layouts/Header";

import Paper from "material-ui/Paper";

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<video className="welcomeVideo" loop autoPlay>
					<source src={bgVideo} type="video/mp4" />
				</video>

				<div className="welcome" align="center">
					<Typography variant="display3" color="default" className="logoText">
						AC AutoMotive
					</Typography>
					<Button variant="raised" className="welcomeBtn">
						<Link className="welcomeBtnTxt" to="/login">
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
