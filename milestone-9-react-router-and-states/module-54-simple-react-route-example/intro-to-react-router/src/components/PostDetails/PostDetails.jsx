import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const { id, title, body } = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>Details about your post: {id}</h3>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
