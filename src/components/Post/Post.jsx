import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <>
      <div className="card-header">
        <h3 value={post.category} className="postCategory">
          {post.category}
        </h3>
        <h3 className="postDate" value={post.date}>
          {post.date}
        </h3>
      </div>
      <div className="card">
        <h2 value={post.name} className="postName">
          {post.name}
        </h2>
        <p className="TextAreaPost" value={post.textArea}>
          {post.textArea}
        </p>
      </div>
    </>
  );
};

export default Post;
