import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="bg-orange-400">
      <div className="navbar p-0 w-[96%] max-w-[1440px] mx-auto">
        <div className="flex-1">
          <Link to="/" className="m-0 text-3xl text-gray-500 font-semibold">
            The Meal DB
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/">Home</Link>
          <Link to="/mealdb">Meal DB</Link>
          <Link to="/restaurant">Restaurant</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="search"
              placeholder="Search meals"
              className="input input-bordered"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
