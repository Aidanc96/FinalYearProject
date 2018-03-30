import React from "react";

import Card, { CardContent } from "material-ui/Card";

const Post = props => (
	<Card className="post-received">
		<CardContent className="post-content">{props.postBody}</CardContent>
	</Card>
);

export default Post;
