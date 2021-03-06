import React from "react";
import PropTypes from "prop-types";

import "../css/accountPage.css";

import PasswordForgetForm from "../forms/PasswordForgetForm";
import PasswordChangeForm from "../password/PasswordChange";
import withAuthorization from "../authorization/withAuthorization";

import Post from "../post/post";
import FeedDisplay from "../feed/feedDisplay";

import firebase from "firebase";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "@material-ui/core/Typography";

import { db, auth } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";

import Header from "../Layouts/Header";

const INITIAL_STATE = {
	username: "",
	email: "",
	avatarURL: "",
	isUploading: false,
	progress: 0,
	error: null
};

class AccountPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...INITIAL_STATE
		};
	}

	handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

	handleProgress = progress => this.setState({ progress });

	handleUploadError = error => {
		this.setState({ isUploading: false });
		console.error(error);
	};

	handleUploadSuccess = filename => {
		this.setState({ avatar: filename, progress: 100, isUploading: false });
		firebase
			.storage()
			.ref("profile-pic")
			.child(filename)
			.getDownloadURL()
			.then(url => this.setState({ avatarURL: url }))
			.then(this.updateProfile);
	};

	updateProfile = () => {
		firebase
			.database()
			.ref("users/" + firebase.auth().currentUser.uid)
			.update({
				avatarURL: this.state.avatarURL
			});
		console.log("User " + this.state.account);
	};

	componentDidMount() {
		firebase
			.database()
			.ref("users/" + firebase.auth().currentUser.uid)
			.once("value")
			.then(snapshot => {
				this.setState({
					username: snapshot.val() && snapshot.val().username,
					avatarURL: snapshot.val() && snapshot.val().avatarURL
				});
				console.log("User " + this.state.account);
				//this.setState({ username: username });
				//console.log("username " + username);
			});
		//this.setState({ email: this.state.email });
		//	console.log("after " + this.state.avatarURL);
	}

	render() {
		const { authUser } = this.props;
		return (
			<div>
				<Header />
				<div>
					<Typography align="center" variant="display2" color="default">
						{this.state.username}
					</Typography>
					<br />
					<PasswordChangeForm />

					<Card className="avatar">
						<CardContent className="avatar-content">
							<span>
								<label>Avatar</label>
								{this.state.isUploading && (
									<p>Progress: {this.state.progress}</p>
								)}
								{this.state.avatarURL && (
									<img className="avatar-image" src={this.state.avatarURL} />
								)}
								<FileUploader
									onClick={this.updateProfile}
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
							</span>
						</CardContent>
					</Card>

					<FeedDisplay {...this.state} />
				</div>
			</div>
		);
	}
}

AccountPage.contextTypes = {
	authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
