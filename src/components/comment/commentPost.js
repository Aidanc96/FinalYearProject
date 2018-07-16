import React from "react";

import firebase from "firebase";
import { db, auth, cloud } from "../../firebase";

import CommentContent from "./commentContent";

class CommentPost extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			commentPosts: [],
			username: [],

			//		postVideos: [],
			commentText: []
			//	avatarURL: "",
		};
	}

	componentDidMount() {
		let postComments = [];
		firebase
			.database()
			.ref("comments/")
			.on("child_added", snapshot => {
				snapshot.forEach(childSnapshot => {
					//	console.log(JSON.stringify(childSnapshot.val()));

					let curTextComment =
						childSnapshot.val() && childSnapshot.val().commentText;
					let commentUsername =
						childSnapshot.val() && childSnapshot.val().username;

					let curComments = childSnapshot.val();

					postComments.push(curComments);
					//mediaArray.push(curMediaPost);
					//textArray.push(curTextPost);
					//console.log(childSnapshot.val());
				});
				this.setState({ commentPosts: postComments, loading: false });
				console.log(JSON.stringify(snapshot.val()));
			});
	}

	render() {
		if (this.state.loading) {
			return <div style={{ textAlign: "center" }}>No Comments</div>;
		}
		//const postList = this.state.postList.map(Content => <div />);

		return (
			<CommentContent
				username={this.props.username}
				//	avatarURL={this.props.avatarURL}
				commentPosts={this.state.commentPosts}
			/>
		);
	}
}

export default CommentPost;
