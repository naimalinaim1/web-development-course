import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData();
  const { id, title, body } = blog;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div>
      <br />
      <h1>Blog ID: {id}</h1>
      <br />
      <p>
        <strong>{title}</strong>
      </p>
      <p>{body}</p>
      <br />
      <br />
      <button onClick={handleNavigate}>Go Back</button>
    </div>
  );
};

export default BlogDetails;
