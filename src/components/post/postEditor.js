import React, { Component } from "react";
import { TextField, Button } from "material-ui";
import FileUploader from "react-firebase-file-uploader";
import PropTypes from "prop-types";

import "../css/postEditor.css";

import firebase from "firebase";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import { db, auth } from "../../firebase";

class PostEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postText: "",
			postImages: "",
			postHeader: "",
			username: "",

			isUploading: false,
			progress: 0,
			error: null
		};

		this.handlePostInputChange = this.handlePostInputChange.bind(this);
		this.createPost = this.createPost.bind(this);
	}

	handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

	handleProgress = progress => this.setState({ progress });

	handleUploadError = error => {
		this.setState({ isUploading: false });
		console.error(error);
	};

	handleUploadSuccess = filename => {
		this.setState({ postImages: filename, progress: 100, isUploading: false });
		firebase
			.storage()
			.ref("post-Img")
			.child(filename)
			.getDownloadURL()
			.then(url => this.setState({ postImages: url }));
		//	.then(this.updateProfilePost);
	};

	//	updateProfilePost = () => {
	//	firebase
	//		.database()
	//		.ref("posts/" + firebase.auth().currentUser.uid)
	//		.update({
	//photoURL: this.state.photoURL,
	//	postMessage: this.state.postMessage
	//	});
	//console.log("after " + this.state.postPhoto);
	//	};

	handleImgToPost = event => {
		this.setState({
			postImages: event.target.postImages
		});
	};

	handlePostInputChange = event => {
		this.setState({
			postText: event.target.value
		});
	};

	createPost = () => {
		this.props.addPost(this.state.postImages, this.state.postText);
		this.setState({
			postImages: "",
			postText: ""
		});
		//this.setState({ username: username });
	};

	render() {
		//	const { authUser } = this.props;

		const { postText, postImages } = this.state;

		const isInvalid = postText === "" || postImages === "";

		return (
			<Card className="post-input">
				{this.state.isUploading && <p>Progress: {this.state.progress}</p>}
				{this.state.postImages && (
					<img className="post-image" src={this.state.postImages} />
				)}

				<CardContent className="post-body">
					<TextField
						className="post-textField"
						id="post-text"
						label="Send Post"
						multiline
						margin="normal"
						value={this.state.postText}
						onChange={this.handlePostInputChange}
					/>

					<FileUploader
						onClick={this.updateProfilePost}
						className="postImageUpload"
						accept="image/*"
						name="postImageUpload"
						randomizeFilename
						storageRef={firebase.storage().ref("post-Img")}
						onUploadStart={this.handleUploadStart}
						onUploadError={this.handleUploadError}
						onUploadSuccess={this.handleUploadSuccess}
						onProgress={this.handleProgress}
						filename={this.state.postImages}
					/>
				</CardContent>
				<Button
					className="btn-post"
					variant="raised"
					onClick={this.createPost}
					disabled={isInvalid}
				>
					Post
				</Button>
			</Card>
		);
	}
}

PostEditor.contextTypes = {
	authUser: PropTypes.object,
	addPost: PropTypes.func
};

const authCondition = authUser => !!authUser;

export default PostEditor;
