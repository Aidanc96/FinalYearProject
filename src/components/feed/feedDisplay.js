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

		this.state = {
			//	postBody: [],
			//	postText: [],
			//		postMedia: [],
			//	postHeader: [],
			//	temp: ""
		};
	}

	/*		componentWillMount = () => {
		const { updateLocalState } = this;
		firebase
			.database()
			.ref("posting/" + firebase.auth().currentUser.uid)
			.on("child_added", snapshot => {
				const response = snapshot.val();
				updateLocalState(response);
			});
	};

		updateLocalState(response) {
			const postBody = this.state.postBody;
			const postText = this.state.postText;
			const postMeida = this.state.postMedia;
			const postHeader = this.state.postHeader;
			const brokenDownPostBody = response.postBody;
			const brokenDownPostHeader = response.postHeader;
			const brokenDownPostMedia = response.postMedia;
			const brokenDownPostText = response.postText.split(/[\r\n]/g);

			postBody.push(brokenDownPostBody),
			postText.push(brokenDownPostText),
			postMedia.push(brokenDownPostMedia),

			postHeader.push(brokenDownPostHeader);

		this.setState({
			postBody: postBody,
			postText: postText,
			postMedia: postMedia,
			postHeader: postHeader
		});
		}
*/

	onClick = e => {
		this.setState({ temp: "lmao" });
	};
	createPost(postMedia, postText, username) {
		const postToSave = { postMedia, postText, username };
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
					.set(postToSave);
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
