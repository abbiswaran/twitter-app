import { Avatar } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import React, { forwardRef } from "react";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublicIcon from "@material-ui/icons/Public";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="header__headerText">
              <h3>
                {displayName}
                {""}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUser className="post__badge" />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublicIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);
export default Post;
