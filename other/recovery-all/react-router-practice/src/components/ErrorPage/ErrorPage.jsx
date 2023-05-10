import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Oops!</h2>
      <p>Page not found!!!!!!!</p>
      <p>{error.status || error.message}</p>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
