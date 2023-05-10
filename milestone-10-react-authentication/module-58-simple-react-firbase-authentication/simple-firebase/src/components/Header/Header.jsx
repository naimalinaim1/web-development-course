import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/sign-up">Sing Up</Link>
      <Link to="/login">Login</Link>
      <br />
      <br />
      <Link to="/practice">Practice</Link>
    </header>
  );
};

export default Header;
