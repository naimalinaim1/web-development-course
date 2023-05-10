import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/phones">Phones</Link>
    </header>
  );
};

export default Header;
