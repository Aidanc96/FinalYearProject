import React, { Component } from "react";
import { TextField, Button } from "material-ui";
import FileUpload from "material-ui-icons/FileUpload";
import Paper from "material-ui/Paper";
import Card, { CardActions, CardContent } from "material-ui/Card";
import { db } from "../../firebase";

class PostEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newPostBody: ""
		};

		this.handlePostInputChange = this.handlePostInputChange.bind(this);
		this.createPost = this.createPost.bind(this);
	}

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
					<Button variant="raised" color="default">
						Upload
						<FileUpload />
					</Button>

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
