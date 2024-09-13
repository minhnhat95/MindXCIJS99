import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <h1>Anonime</h1>
      <a href="">Home</a>
      <a href="">List Anime</a>
      <input type="text" placeholder="Search anime or movie" />
    </div>
  );
};

export default Header;
