import React from "react";

import "../css/content.css";
import Divider from "material-ui/Divider";
import Card, {
	CardHeader,
	CardMedia,
	CardContent,
	CardActions
} from "material-ui/Card";
class AllPostsContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//{console.log(JSON.stringify("The body"+this.props.postBody))}
		//console.log("recalled content");
		const { postMedia, postText, allUsersPosts } = this.props;
		//console.log(this.props.postMedia);
		return (
			<div>
				{allUsersPosts
					.map((allPost, postIndex) => (
						<div key={postIndex}>
							<Card className="post-received">
								<CardHeader title={this.props.username} />
								<Divider />

								<CardContent className="post-content">
									<div className="station">
										<img className="feed-image" src={allPost.postMedia} />

										<Divider />
										<div>
											<h2>{allPost.postText}</h2>
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

export default AllPostsContent;
