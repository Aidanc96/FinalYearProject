import React from "react";
import Post from "../post/post";
import LandingFeedDisplay from "../feed/landingFeedDisplay";

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<h1 align="center">Welcome</h1>
				<LandingFeedDisplay />
			</div>
		);
	}
}

export default LandingPage;
