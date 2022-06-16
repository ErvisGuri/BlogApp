import React from "react";
import "./Post.css";

const Post = ({ Post }) => {
  return (
    <div className="postContainer">
      <div className="card-header">
        <h3 value={Post.category} className="category">
          {Post.category}
        </h3>
        <h3 className="datePost" value={Post.date}>
          {Post.date}
        </h3>
      </div>
      <div className="card">
        <h2 value={Post.name} className="name">
          {Post.name}
        </h2>
        <p className="TextAreaPost" value={Post.textArea}>
          {Post.textArea}
        </p>
      </div>
    </div>
  );
};

export default Post;
