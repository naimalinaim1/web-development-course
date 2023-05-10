import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <header>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl mr-auto">
          daisyUI
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/orders" className="btn btn-ghost normal-case text-xl">
          Orders
        </Link>
        {user && (
          <Link to="/profile" className="btn btn-ghost normal-case text-xl">
            Profile
          </Link>
        )}
        <Link to="/register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">
          Login
        </Link>
        {user && (
          <>
            <span>{user.email}</span>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost normal-case text-lg"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
