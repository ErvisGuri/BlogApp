import React, { useState } from "react";
import "./PostList.css";

//Importing Components
import Post from "../Post/Post";
import ModalAdd from "../Modal/Modal";
import BlogContext from "../../BlogContext";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

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

  const sortedDate = allpostBlogs
    .sort((a, b) => {
      return new Date(a).getDate() - new Date(b).getDate();
    })
    .reverse();

  const sortAsc = () => {
    setAllPostBlogs(
      [...allpostBlogs].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      })
    );
  };

  const sortDesc = () => {
    console.log(allpostBlogs);
    setAllPostBlogs(
      [...allpostBlogs].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
    );
  };

  return (
    <div className="container">
      <div className="container-post">
        <div
          style={{
            justifyContent: "space-between",
            position: "sticky",
            top: "130px",
          }}
        >
          <SortAscendingOutlined
            onClick={sortAsc}
            style={{
              marginLeft: "350px",
              fontSize: "14px",
              color: "rgb(92, 91, 91)",
            }}
          />
          <SortDescendingOutlined
            onClick={sortDesc}
            style={{
              marginLeft: "5px",
              fontSize: "14px",
              color: "rgb(92, 91, 91)",
            }}
          />
        </div>
        {allpostBlogs.map((item, index) => (
          <Post key={index} post={item} />
        ))}
      </div>
      <ModalAdd nameTextHandler={nameTextHandler} />
    </div>
  );
};

export default PostList;
