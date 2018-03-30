import React, { Component } from "react";

import "../css/homePage.css";
import withAuthorization from "../authorization/withAuthorization";
import { db } from "../../firebase";

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: null
		};
	}

	componentDidMount() {
		db
			.onceGetUsers()
			.then(snapshot => this.setState(() => ({ users: snapshot.val() })));
	}

	render() {
		const { users } = this.state;
		return (
			<div>
				<h1 align="center">Home</h1>
				<p align="center">This can be seen by logged in users</p>
				{!!users && <UserList users={users} />}
			</div>
		);
	}
}
const UserList = ({ users }) => (
	<div>
		<h2>List of Usernames of Users</h2>
		<p>(Saved on Sign Up in Firebase Database)</p>

		{Object.keys(users).map(key => <div key={key}>{users[key].avatarURL}</div>)}
	</div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
