import React, { Component } from "react";

import firebase from "firebase";

import "../css/homePage.css";
import Card, { CardActions, CardContent } from "material-ui/Card";

import FeedDisplay from "../feed/feedDisplay";
import withAuthorization from "../authorization/withAuthorization";
import { db } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: null,
			isUploading: false,
			progress: 0,
			avatarURL: ""
		};
	}
	render() {
		const { users } = this.state;
		return (
			<div>
				<h1 align="center">Home</h1>
				<p align="center">This can be seen by logged in users</p>
				{!!users && <UserList users={users} />}

				<br />
			</div>
		);
	}
}
const UserList = ({ users }) => (
	<div>
		<h2>List of Usernames of Users</h2>
		<p>(Saved on Sign Up in Firebase Database)</p>

		{Object.keys(users).map(key => <div key={key}>{users[key].username}</div>)}
	</div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
