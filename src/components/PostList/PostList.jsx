import React from "react";
import "./PostList.css";

//Importing Components
import Post from "../Post/Post";
import Modal from "../Modal/Modal";

const PostList = () => {
  return (
    <div className="container">
      <div className="container-post">
        <Post />
      </div>
      <Modal />
    </div>
  );
};

export default PostList;
