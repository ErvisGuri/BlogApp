import React from "react";
import "./Post.css";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

const Post = ({ post, sortedDate }) => {
  return (
    <>
      <div className="card-header">
        <h3 value={post.category} className="postCategory">
          {post.category}
        </h3>
        <h3 className="postDate" value={post.date}>
          {post.date}
        </h3>
        <SortAscendingOutlined
          onClick={() => sortedDate}
          style={{ marginLeft: "350px", fontSize: "14px" }}
        />
        <SortDescendingOutlined
          onClick={() => console.log(sortedDate)}
          style={{ fontSize: "14px" }}
        />
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
