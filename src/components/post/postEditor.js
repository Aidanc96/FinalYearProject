import React, { Component } from "react";
import { TextField, Button } from "material-ui";
import FileUpload from "./fileUpload";

import Card, { CardContent } from "material-ui/Card";
import { db, firebase, storage } from "../../firebase";

class PostEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newPostBody: "",
			photos: []
		};

		this.handlePostInputChange = this.handlePostInputChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		this.createPost = this.createPost.bind(this);
	}

	handleUpload = event => {
		const file = event.target.files[0];
		const storage = firebase.storage().ref("/photo/" + file.name);
		const task = storage.put(file);

		task.on(
			//		"state_changed",
			//		snapshot => {
			///		let percentage = snapshot.bytesTranferred / snapshot.totalBytes * 100;
			//		this.setState({
			//		uploadValue: percentage
			//	});
			//	},
			error => {
				console.log(error.message);
			},
			() => {
				const record = {
					photoURL: this.state.authUser.photoURL,
					displayName: this.state.authUser.displayName,
					image: task.snapshot.downloadURL
				};

				const db = firebase.database().ref("photo");
				const newPhoto = db.push();
				newPhoto.set(record);
			}
		);
	};

	handlePostInputChange(event) {
		this.setState({
			newPostBody: event.target.value
		});
	}

	createPost() {
		this.props.addPost(this.state.newPostBody);
		this.setState({
			newPostBody: ""
		});
	}

	render() {
		return (
			<Card className="post-input">
				<CardContent className="post-body">
					<TextField
						className="post-textField"
						id="post-text"
						label="Send Post"
						multiline
						margin="normal"
						value={this.state.newPostBody}
						onChange={this.handlePostInputChange}
					/>
					<FileUpload onUpload={this.handleUpload} />

					<Button
						className="btn-post"
						variant="raised"
						onClick={this.createPost}
					>
						Post
					</Button>
				</CardContent>
			</Card>
		);
	}
}

export default PostEditor;
