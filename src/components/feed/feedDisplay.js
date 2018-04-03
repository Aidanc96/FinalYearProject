import React, { Component } from "react";

import firebase from "firebase";
import Post from "../post/post";
import PostEditor from "../post/postEditor";
import { db, auth } from "../../firebase";
import Button from "material-ui/Button";
class FeedDisplay extends Component {
	constructor(props) {
		super(props);

		this.addPost = this.addPost.bind(this);

		this.state = {
			postBody: [],
			postText: [],
			postImages: [],
			postHeader: [],
			temp: ""
		};
	}

	//	componentWillMount = () => {
	//		const { updateLocalState } = this;
	//	firebase
	//		.database()
	//		.ref("posting/" + firebase.auth().currentUser.uid)
	//		.on("child_added", snapshot => {
	//			const response = snapshot.val();
	//		updateLocalState(response);
	//	});
	//	};

	//	updateLocalState(response) {
	//const postBody = this.state.postBody;
	//	const postText = this.state.postText;
	//		const postImages = this.state.postImages;
	//	const postHeader = this.state.postHeader;
	//	const brokenDownPostBody = response.postBody;
	//	const brokenDownPostHeader = response.postHeader;
	//	const brokenDownPostImages = response.postImages;
	//		const brokenDownPostText = response.postText.split(/[\r\n]/g);
	//	postBody.push(brokenDownPostBody),
	//		postText.push(brokenDownPostText),
	//	postImages.push(brokenDownPostImages),
	//		postHeader.push(brokenDownPostHeader);
	//	this.setState({
	//	postBody: postBody,
	//		postText: postText,
	//	postImages: postImages,
	//			postHeader: postHeader
	//	});
	//	}

	onClick = e => {
		this.setState({ temp: "lmao" });
	};
	addPost(postImages, postText) {
		const postToSave = { postImages, postText };
		firebase
			.database()
			.ref("posting/" + firebase.auth().currentUser.uid + "/")
			.push()
			.set(postToSave);
	}

	render() {
		return (
			<div>
				<PostEditor addPost={this.addPost} />
				<Post {...this.props} />
			</div>
		);
	}
}

export default FeedDisplay;
