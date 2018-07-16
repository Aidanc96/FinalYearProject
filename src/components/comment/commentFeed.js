import React, { Component } from "react";
import PropTypes from "prop-types";

import firebase from "firebase";

import CommentPost from "../comment/commentPost";
import CommentEditor from "../comment/commentEditor";
import { db, auth } from "../../firebase";
import Button from "material-ui/Button";

class CommentFeed extends Component {
	constructor(props) {
		super(props);

		//this.createComs = this.createComs.bind(this);
		this.state = {};
	}

	createComs(commentText, username) {
		const commentToSave = { commentText, username };
		firebase
			.database()
			.ref("comments/")
			.push()
			.set(commentToSave);
		console.log("hello");
	}

	render() {
		return (
			<div>
				<CommentEditor createComs={this.createComs.bind(this)} />
				<CommentPost {...this.props} />
			</div>
		);
	}
}

CommentFeed.contextTypes = {
	createComs: PropTypes.func
};

export default CommentFeed;
