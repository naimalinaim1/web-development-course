import React from "react";
import "./Blog.css";
import { Link, useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, title, body } = blog;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/blogs/blog/${id}`);
  };

  return (
    <div className="blog">
      <h2>ID: {id}</h2>
      <br />
      <p>
        <strong>{title}</strong>
      </p>
      <p>{body}</p>
      <br />
      <Link to={`/blogs/blog/${id}`}>Details</Link>
      <button onClick={handleNavigate}>Details with Button</button>
    </div>
  );
};

export default Blog;
