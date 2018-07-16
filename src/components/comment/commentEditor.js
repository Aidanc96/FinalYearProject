import React, { Component } from "react";
import { TextField, Button } from "material-ui";
import PropTypes from "prop-types";

import "../css/postEditor.css";

import firebase from "firebase";

import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import { db, auth } from "../../firebase";

class CommentEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			commentText: "",
			username: ""
		};

		this.handleCommentInputChange = this.handleCommentInputChange.bind(this);
	}

	componentDidMount() {
		firebase
			.database()
			.ref("users/" + firebase.auth().currentUser.uid)
			.once("value")
			.then(snapshot => {
				this.setState({
					username: snapshot.val() && snapshot.val().username
				});
			});
	}

	handleCommentInputChange = event => {
		this.setState({
			commentText: event.target.value
		});
	};

	//	createComment = () => {
	//		this.props.createComment(
	//		this.state.postMedia,
	//		this.state.postText,
	//		this.state.username
	//		);
	//		this.setState({
	//			username: "",
	//			postMeida: "",
	//			postText: ""
	//		});
	//this.setState({ username: username });
	//	};

	createComment = () => {
		this.props.createComs(this.state.commentText, this.state.username);
		this.setState({
			commentText: "",
			username: ""
		});
	};

	//	createComment = () => {
	//	this.setState({
	//		commentText: this.state.commentText,
	//		username: this.state.username
	//	}).then(snapshot => {
	//		this.setState({});
	//	});
	//	console.log(this.state.commentText);
	//	console.log(this.state.username);
	//};

	//	createComment(commentText, username) {
	//const postToSave = { commentText };
	//	const commentToSave = { commentText, username };
	//	firebase
	//		.database()
	//		.ref("allPosts/" + "/comments")
	//		.push()
	//		.set(commentToSave);
	//	}

	render() {
		//	const { authUser } = this.props;

		const { commentText } = this.state;

		const isInvalid = commentText === "";

		return (
			<Card className="comment-input">
				<CardContent className="post-body">
					<TextField
						className="post-textField"
						id="post-text"
						label="Comment"
						multiline
						margin="normal"
						value={this.state.commentText}
						onChange={this.handleCommentInputChange}
					/>
				</CardContent>
				<Button
					className="btn-comment"
					variant="raised"
					onClick={this.createComment}
					disabled={isInvalid}
				>
					Comment
				</Button>
			</Card>
		);
	}
}

const authCondition = authUser => !!authUser;

export default CommentEditor;
