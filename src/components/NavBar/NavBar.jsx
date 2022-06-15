import React from "react";

import Search from "antd/lib/input/Search";
import "./NavBar.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const NavBar = () => {
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
      <Search className="search" />
    </div>
  );
};

export default NavBar;
