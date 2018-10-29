import React from "react";

import "../css/content.css";

import CommentEditor from "../comment/commentEditor";
import CommentFeed from "../comment/commentFeed";

import Divider from "material-ui/Divider";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Collapse from "material-ui/transitions/Collapse";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Typography from "@material-ui/core/Typography";
class AllPostsContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //{console.log(JSON.stringify("The body"+this.props.postBody))}
    //console.log("recalled content");
    const { postMedia, postText, allUsersPosts, username } = this.props;
    //	const Count = require("react-count").OnlineCount;
    //console.log(this.props.postMedia);
    return (
      <div>
        {allUsersPosts
          .map((allPost, postIndex) => (
            <div key={postIndex}>
              <Card className="post-received">
                <CardHeader title={allPost.username} />
                <Divider />

                <CardContent className="post-content">
                  <div className="station">
                    <img className="feed-image" src={allPost.postMedia} />

                    <div>
                      <Typography variant="headline" color="default">
                        {allPost.postText}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
                <CommentFeed />
              </Card>
            </div>
          ))
          .reverse()}
      </div>
    );
  }
}

export default AllPostsContent;
