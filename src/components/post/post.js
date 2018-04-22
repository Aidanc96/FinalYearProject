import React from "react";

import firebase from "firebase";
import { db, auth, cloud } from "../../firebase";

import Content from "./content";

import VideoContent from "./videoContent";

class Post extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			postBody: [],
			allUserPosts: [],
			//		username: "",
			postMedia: [],

			postVideoMedia: [],

			//		postVideos: [],
			postText: [],
			//	avatarURL: "",
			loading: true
		};
	}

	componentDidMount() {
		let allPosts = [];
		firebase
			.database()
			.ref("posting/" + firebase.auth().currentUser.uid)
			.on("child_added", snapshot => {
				snapshot.forEach(childSnapshot => {
					//console.log(JSON.stringify(childSnapshot.val()));
					let curMediaPost =
						childSnapshot.val() && childSnapshot.val().postMedia;

					let curTextPost = childSnapshot.val() && childSnapshot.val().postText;
					let curPosts = childSnapshot.val();

					allPosts.push(curPosts);
					//mediaArray.push(curMediaPost);
					//textArray.push(curTextPost);
					//	console.log(childSnapshot.val());
				});
				this.setState({ allUserPosts: allPosts, loading: false });
				//console.log(JSON.stringify(snapshot.val()));

				//this.setState({ posts: [this.state.posts, array], loading: false });

				//this.setState({
				//	posts: snapshot.val(),
				//	loading: false
				//	});

				//snapshot.forEach(childSnapshot => {
				//this.state.posts.push(allPosts);

				//this.state.posts.push(allPosts);

				//postMedia.push(posts[1]);
				//console.log(Object.keys(posts));
				///	function(child, prev) {
				//	console.log(child.key + prev);
				//	this.setState({
				//	loading: false
				//	postMedia: snapshot.val() && snapshot.val().postMedia,
				//	postText: snapshot.val() && snapshot.val().postText
				//	});

				//	ref.off();
				//	}

				//	const newPost = {

				//	var ref = firebase.database().ref().child('posting/' + firebase.auth().currentUser.uid ).orderByChild('posts');
				//	ref.once('value',function(snap) {
				//	    snap.forEach(function(item) {
				//        var itemVal = item.val();
				//	        keys.push(itemVal);
				//	    });
				//    for (i=0; i < keys.length; i++) {
				//        counts.push(keys[i].posts);
				//	    }
				//	});

				//		const postRef = firebase
				//		.database()
				//		.ref()
				//		.child("posting")
				//		.orderByKey();
				//		postRef.once("value", snapshot => {
				//		snapshot.forEach(child => {
				//			this.setState({
				//				username: this.state.username.concat([child.key]),
				//			postMedia: this.state.postMedia.concat([child.val().postMedia]),
				//			postText: this.state.postText.concat([child.val().postText])
				//			});
				//		});
				//		});

				//	postMedia: snapshot.val() && snapshot.val().postMedia,
				//	postText: snapshot.val() && snapshot.val().postText
				//	};
				//	this.setState(previousState => {
				//		postList: previousState.postList.append(newPost);

				//	console.log("before post body");
				/*
				this.setState({
					loading: false,
					postMedia: [
						this.state.postMedia,
						snapshot.val() && snapshot.val().postMedia
					],
					postText: [
						this.state.postText,
						snapshot.val() && snapshot.val().postText
					]
				});
				//		console.log("after post body " + this.state.postBody);
				*/
			});
	}

	render() {
		if (this.state.loading) {
			return <div style={{ textAlign: "center" }}>No Posts!</div>;
		}
		//const postList = this.state.postList.map(Content => <div />);

		return (
			<Content
				username={this.props.username}
				//	avatarURL={this.props.avatarURL}
				allUserPosts={this.state.allUserPosts}
			/>
		);
	}
}

export default Post;
