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
			//	posts: ["hello world"],
			postBody: "",
			postText: "",
			postMedia: "",

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
		this.setState({ postMedia: filename, progress: 100, isUploading: false });
		firebase
			.storage()
			.ref("post-Img")
			.child(filename)
			.getDownloadURL()
			.then(url => this.setState({ postMedia: url }));
		//	.then(this.updateProfilePost);
	};

	componentDidMount() {
		firebase
			.database()
			.ref("users/" + firebase.auth().currentUser.uid)
			.once("value")
			.then(snapshot => {
				this.setState({
					username: snapshot.val() && snapshot.val().username
				});

				//this.setState({ username: username });
				//console.log("username " + username);
			});
		//this.setState({ email: this.state.email });
		//	console.log("after " + this.state.avatarURL);
	}

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

	//	handleUsernameToPost = event => {
	//	this.setState({
	//		useranme: event.target.username
	//	});
	//	console.log("user" + this.state.username);
	//	};

	handleImgToPost = event => {
		this.setState({
			postMedia: event.target.postMedia
		});
	};

	handlePostInputChange = event => {
		this.setState({
			postText: event.target.value
		});
	};

	//	createPost = () => {
	//	const newState = Object.assign({}, this.state);
	//	newState.postBody.push(this.state.postMedia, this.state.postText);
	//	newState.postMeida = "";
	//	newState.postText = "";
	//	this.setState(newState);
	//	};

	createPost = () => {
		this.props.createPost(
			this.state.postMedia,
			this.state.postText,
			this.state.username
		);
		this.setState({
			username: "",
			postMeida: "",
			postText: ""
		});
		//this.setState({ username: username });
	};

	render() {
		//	const { authUser } = this.props;

		const { postText, postMedia } = this.state;

		const isInvalid = postText === "" || postMedia === "";

		return (
			<Card className="post-input">
				{this.state.isUploading && <p>Progress: {this.state.progress}</p>}
				{this.state.postMedia && (
					<img className="post-image" src={this.state.postMedia} />
				)}
				{/* <video className="post-image" src={this.state.postMedia} />)*/}

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
						accept="image/*|video/*"
						multiple={false}
						name="postImageUpload"
						randomizeFilename
						storageRef={firebase.storage().ref("post-Img")}
						onUploadStart={this.handleUploadStart}
						onUploadError={this.handleUploadError}
						onUploadSuccess={this.handleUploadSuccess}
						onProgress={this.handleProgress}
						filename={this.state.postMedia}
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
	createPost: PropTypes.func
};

const authCondition = authUser => !!authUser;

export default PostEditor;
