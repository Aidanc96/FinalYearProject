import React, { Component } from "react";
import PropTypes from "prop-types";

import "../css/accountPage.css";

import PasswordForgetForm from "../forms/PasswordForgetForm";
import PasswordChangeForm from "../password/PasswordChange";
import withAuthorization from "../authorization/withAuthorization";

import firebase from "firebase";
import Card, { CardActions, CardContent } from "material-ui/Card";
import FeedDisplay from "../feed/feedDisplay";
import { db } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";

class AccountPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: null,
			isUploading: false,
			progress: 0,
			avatarURL: ""
		};

		this.handleUploadStart = () =>
			this.setState({ isUploading: true, progress: 0 });

		this.handleProgress = progress => this.setState({ progress });

		this.handleUploadError = error => {
			this.setState({ isUploading: false });
			console.error(error);
		};

		this.handleUploadSuccess = filename => {
			this.setState({ avatar: filename, progress: 100, isUploading: false });
			firebase
				.storage()
				.ref("profile-pic")
				.child(filename)
				.getDownloadURL()
				.then(url => this.setState({ avatarURL: url }));
		};
	}

	componentDidMount() {
		db
			.onceGetUsers()
			.then(snapshot => this.setState(() => ({ users: snapshot.val() })));
	}

	render() {
		const { authUser } = this.props;
		return (
			<div>
				<h1 className="accountPageText">Account</h1>
				<br />
				<PasswordChangeForm />

				<Card className="avatar">
					<CardContent className="avatar-content">
						<label>Avatar:</label>
						{this.state.isUploading && <p>Progress: {this.state.progress}</p>}
						{this.state.avatarURL && <img src={this.state.avatarURL} />}
						<FileUploader
							className="avatar-submit"
							accept="image/*"
							name="avatar"
							randomizeFilename
							storageRef={firebase.storage().ref("profile-pic")}
							onUploadStart={this.handleUploadStart}
							onUploadError={this.handleUploadError}
							onUploadSuccess={this.handleUploadSuccess}
							onProgress={this.handleProgress}
						/>
					</CardContent>
				</Card>

				<FeedDisplay />
			</div>
		);
	}
}

AccountPage.contextTypes = {
	authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
