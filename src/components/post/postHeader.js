import React, { Component } from "react";

import firebase from "firebase";
import { db, auth } from "../../firebase";

class PostHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			avatarURL: ""
		};
	}

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
			});
		//this.setState({ email: this.state.email });
		//	console.log("after " + this.state.avatarURL);
	}

	rendeer() {
		return (
			<div>
				<div>
					<img src={picture.image} alt="" className="photo" />
					<br />
					<img src={this.state.avatarURL} className="rounded-image" />
					<br />
					<span className="user-name">{this.state.username}</span>
				</div>
			</div>
		);
	}
}

export default PostHeader;
