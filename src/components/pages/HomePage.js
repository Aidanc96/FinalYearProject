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
			.onceGetPosts()
			.then(snapshot => this.setState(() => ({ posts: snapshot.val() })));
	}

	render() {
		const { posts } = this.state;
		return (
			<div>
				<h1 align="center">Home</h1>
				<p align="center">This can be seen by logged in users</p>
				{!!posts && <PostsList posts={posts} />}
			</div>
		);
	}
}
const PostsList = ({ posts }) => (
	<div>
		<h2>List of Usernames of Users</h2>
		<p>(Saved on Sign Up in Firebase Database)</p>

		{Object.keys(posts).map(key => <div key={key}>{posts[key].username}</div>)}
	</div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
