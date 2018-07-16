import React from "react";

import "../css/content.css";
import Divider from "material-ui/Divider";
import Card, {
	CardHeader,
	CardMedia,
	CardContent,
	CardActions
} from "material-ui/Card";

class CommentContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//{console.log(JSON.stringify("The body"+this.props.postBody))}
		//console.log("recalled content");
		const { commentText, commentPosts } = this.props;
		//console.log(this.props.postMedia);
		return (
			<div>
				{commentPosts.map((comment, commentIndex) => (
					<div key={commentIndex}>
						<Card className="post-received">
							<CardContent className="post-content">
								<div className="station">
									<div>
										<h1>{this.props.username}</h1>
										<h2>{comment.commentText}</h2>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				))}
			</div>
		);
	}
}

export default CommentContent;
