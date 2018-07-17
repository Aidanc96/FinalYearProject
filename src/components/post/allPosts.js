import React from "react";

import firebase from "firebase";
import { db, auth, cloud } from "../../firebase";

import AllPostsContent from "./allPostsContent";

import VideoContent from "./videoContent";

import CircularProgress from "@material-ui/core/CircularProgress";
import "../css/allPosts.css";

class AllUsersPosts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allUsersPosts: [],
			//		username: "",
			allPostMedia: [],

			postVideoMedia: [],

			//		postVideos: [],
			allPostText: [],
			//	avatarURL: "",
			loading: true
		};
	}

	componentDidMount() {
		let everyPosts = [];

		firebase
			.database()
			.ref("allPosts/")
			.once("value", snapshot => {
				snapshot.forEach(childSnapshot => {
					//	console.log(JSON.stringify(childSnapshot.val()));
					//	console.log(childSnapshot.val());
					let allMediaPost =
						childSnapshot.val() && childSnapshot.val().allPostMedia;

					let allTextPost =
						childSnapshot.val() && childSnapshot.val().allPostText;

					let usersPosts = childSnapshot.val();

					everyPosts.push(usersPosts);

					//	console.log(childSnapshot.val());
					console.log(everyPosts);
				});
				this.setState({ allUsersPosts: everyPosts, loading: false });

				//	console.log(JSON.stringify(snapshot.val()));

				//		console.log("after post body " + this.state.postBody);
			});
	}

	render() {
		if (this.state.loading) {
			return (
				<div className="loadingHomeFeed">
					<CircularProgress align="center" size={50} />
				</div>
			);
		}
		//const postList = this.state.postList.map(Content => <div />);

		return (
			<AllPostsContent
				username={this.props.username}
				allUsersPosts={this.state.allUsersPosts}
			/>
		);
	}
}

export default AllUsersPosts;
