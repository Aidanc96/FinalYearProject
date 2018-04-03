import React from "react";

import firebase from "firebase";
import { db, auth, cloud } from "../../firebase";

import Content from "./content";

class Post extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			username: "",
			postImages: [],
			postText: [],
			avatarURL: "",
			loading: true
		};
	}

	componentDidMount() {
		{
			firebase
				.database()
				.ref("posting/" + firebase.auth().currentUser.uid + "/")
				.on("child_added", snapshot => {
					this.setState({
						loading: false
					});

					this.setState(prevState => ({
						postImages: [
							...prevState.postImages,
							snapshot.val() && snapshot.val().postImages
						],
						postText: [
							...prevState.postText,
							snapshot.val() && snapshot.val().postText
						]
					}));
				});
		}
	}

	render() {
		if (this.state.loading) {
			return <div style={{ textAlign: "center" }}>loading</div>;
		}
		return (
			<Content
				username={this.props.username}
				postImages={this.state.postImages}
				postText={this.state.postText}
			/>
		);
	}
}

export default Post;
