import React, { useState } from "react";

import Search from "antd/lib/input/Search";
import "./NavBar.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import BlogContext from "../../BlogContext";

const NavBar = () => {
  const { postBlogValue } = React.useContext(BlogContext);
  const [postBlog, setPostBlog] = postBlogValue;
  const [postSearch, setPostSearch] = useState([]);

  const handlechange = (e) => {
    setPostBlog(e.target.value);
    console.log(e.target.value);
  };

  //FILTER Serach ////////////////////////////////////////////////////////////////////////////////
  // postSearch.push(postBlog)

  // const filterPost = postSearch.filter((post) =>
  //   post.postBlog.name.toLowerCase().includes(postSearch.toLowerCase())
  // );
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="navbar">
      <div className="fb">
        <FacebookOutlined className="icon" />
      </div>
      <div className="ig">
        <InstagramOutlined className="icon" />
      </div>
      <div className="tw">
        <TwitterOutlined className="icon" />
      </div>
      <div className="websitename">MY BLOG WEBSITE</div>
      <Search
        placeholder="Search Blog"
        onChange={handlechange}
        className="searchNav"
        style={{
          height: "30px",
          width: "200px",
          marginLeft: "300px",
        }}
      />
    </div>
  );
};

export default NavBar;
