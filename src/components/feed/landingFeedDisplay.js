import React, { Component } from "react";

import firebase from "firebase";
import { db, auth } from "../../firebase";

import AllUsersPosts from "../post/allPosts";

class LandingFeedDisplay extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AllUsersPosts {...this.props} />
			</div>
		);
	}
}

export default LandingFeedDisplay;
