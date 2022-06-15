import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <h1 className="category">Developer 6/15/2022</h1>
      <div className="card">
        <h2 className="name">Ervis Guri</h2>
        <p>
          I’m dedicating this space to anything and everything about learning.
          Having been involved with a wonderful organization called Outward
          Bound throughout my life gave me the inclination towards learning and
          development. I am delving into this area more and more – and the more
          I learn about it, the more interesting it becomes. The defining moment
          for me was year 2010 when I was going through a personal turmoil,
          during which I had to push myself beyond my limits to be strong.
        </p>
      </div>
    </div>
  );
};

export default Post;
