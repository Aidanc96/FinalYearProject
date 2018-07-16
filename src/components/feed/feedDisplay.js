import React, { Component } from "react";

import firebase from "firebase";
import Post from "../post/post";

import PostEditor from "../post/postEditor";
import { db, auth } from "../../firebase";
import Button from "material-ui/Button";

class FeedDisplay extends Component {
	constructor(props) {
		super(props);

		this.createPost = this.createPost.bind(this);

		this.state = {};
	}

	onClick = e => {
		this.setState({ temp: "lmao" });
	};

	createPost(postMedia, postText, username) {
		const postToSave = { postMedia, postText };
		const postToAllPosts = { postMedia, postText, username };
		firebase
			.database()
			.ref("posting/" + firebase.auth().currentUser.uid + "/posts")
			.push()
			.set(postToSave)
			.then(() => {
				firebase
					.database()
					.ref("allPosts/")
					.push()
					.set(postToAllPosts);
			});
	}

	render() {
		return (
			<div>
				<PostEditor createPost={this.createPost} />
				<Post {...this.props} />
			</div>
		);
	}
}

export default FeedDisplay;
