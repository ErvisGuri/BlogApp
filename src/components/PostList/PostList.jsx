import React, { useState } from "react";
import "./PostList.css";

//Importing Components
import Post from "../Post/Post";
import ModalAdd from "../Modal/Modal";
import BlogContext from "../../BlogContext";

const PostList = () => {
  const {
    nameValue,
    categoryValue,
    dateValue,
    textAreaValue,
    postBlogValue,
    allpostBlogsValue,
  } = React.useContext(BlogContext);

  const [name, setName] = nameValue;
  const [categorys, setCategorys] = categoryValue;
  const [date, setDate] = dateValue;
  const [textArea, setTextArea] = textAreaValue;
  const [postBlog, setPostBlog] = postBlogValue;
  const [allpostBlogs, setAllPostBlogs] = allpostBlogsValue;

  const nameTextHandler = (e) => {
    setName(e.target.value);
  };

  const currentdate = allpostBlogs[0];
  console.log(currentdate);

  const sortedDate = allpostBlogs
    .sort((a, b) => {
      return new Date(a).getDate() - new Date(b).getDate();
    })
    .reverse();

  return (
    <div className="container">
      <div className="container-post">
        {allpostBlogs.map((item, index) => (
          <Post key={index} post={item} sortedDate={sortedDate} />
        ))}
      </div>
      <ModalAdd nameTextHandler={nameTextHandler} />
    </div>
  );
};

export default PostList;
