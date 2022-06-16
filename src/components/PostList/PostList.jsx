import React, { useState } from "react";
import "./PostList.css";

//Importing Components
import Post from "../Post/Post";
import ModalAdd from "../Modal/Modal";
import BlogContext from "../../BlogContext";

const PostList = () => {
  const { nameValue, categoryValue, dateValue, textAreaValue, postBlogValue } =
    React.useContext(BlogContext);

  const [name, setName] = nameValue;
  const [categorys, setCategorys] = categoryValue;
  const [date, setDate] = dateValue;
  const [textArea, setTextArea] = textAreaValue;
  const [postBlog, setPostBlog] = postBlogValue;

  const nameTextHandler = (e) => {
    setName(e.target.value);
  };

  console.log(postBlog);

  return (
    <div className="container">
      <div className="container-post">
        {postBlog.map((post, i) => {
          console.log(post);
          return (
            <Post
              post={post}
              key={i}
              Post={{
                name: name,
                category: categorys,
                date: date,
                textArea: textArea,
              }}
            />
          );
        })}
        <Post
          Post={{
            name: name,
            category: categorys,
            date: date,
            textArea: textArea,
          }}
        />
      </div>
      <ModalAdd
        nameTextHandler={nameTextHandler}
        PostModal={{
          name: name,
          category: categorys,
          date: date,
          textArea: textArea,
        }}
      />
    </div>
  );
};

export default PostList;
