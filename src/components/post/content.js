import React from "react";

import "../css/content.css";
import Divider from "material-ui/Divider";
import Card, {
	CardHeader,
	CardMedia,
	CardContent,
	CardActions
} from "material-ui/Card";
class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//{console.log(JSON.stringify("The body"+this.props.postBody))}
		//console.log("recalled content");
		const { postMedia, postText, allUserPosts } = this.props;
		//console.log(this.props.postMedia);
		return (
			<div>
				{allUserPosts
					.map((post, postIndex) => (
						<div key={postIndex}>
							<Card className="post-received">
								<CardHeader title={this.props.username} />
								<Divider />

								<CardContent className="post-content">
									<div className="station">
										<img className="feed-image" src={post.postMedia} />

										<Divider />
										<div>
											<h2>{post.postText}</h2>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					))
					.reverse()}
			</div>
		);
	}
}

export default Content;
