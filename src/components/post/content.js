import React from "react";

import "../css/content.css";

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
		console.log("recalled content");

		console.log(this.props.postText);
		const { postImages, postText } = this.props;

		return (
			<div>
				<Card className="post-received">
					<CardHeader title={this.props.username} />
					<CardContent className="post-content">
						<div>
							{postImages
								.map(postImages => (
									<div className="station" key={postImages}>
										<img className="feed-image" src={postImages} />

										<div>
											{postText
												.map(postText => (
													<div className="station" key={postText}>
														<h2>{postText}</h2>
													</div>
												))
												.reverse()}
										</div>
									</div>
								))
								.reverse()}
						</div>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default Content;
