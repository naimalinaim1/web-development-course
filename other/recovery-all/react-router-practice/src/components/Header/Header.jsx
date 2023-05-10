import React from "react";
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <header>
      <div>
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/blogs">Blog</ActiveLink>
      </div>
    </header>
  );
};

export default Header;
