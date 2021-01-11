import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

interface Props {
  username: string;
  caption: string;
  imageUrl: string;
}

const Post = (props: Props) => {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar
          className="post-avatar"
          alt="Pa3lon"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
        {/* Header -> avatar + username*/}
      </div>
      <img className="post-image" src={props.imageUrl} alt="post" />
      {/* Image */}
      <h4 className="post-text">
        <strong>{props.username}: </strong>
        {props.caption}
      </h4>
      {/* Username + Caption */}
    </div>
  );
};

export default Post;
