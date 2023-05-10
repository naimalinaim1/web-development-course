import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div
      style={{
        border: "2px solid mediumslateblue",
        borderRadius: "10px",
        margin: "10px",
        padding: "20px",
      }}
    >
      <h5>ID: {id}</h5>
      <p>
        <strong>{title}</strong>
      </p>
      <Link to={`/post/${id}`}>Show Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Post Details</button>
      </Link>
      <button onClick={handleNavigation}>Show Button Handler</button>
    </div>
  );
};

export default Post;
