import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const { name, email, phone } = useLoaderData();

  return (
    <div>
      <h3>Everything about this person is here</h3>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default FriendDetails;
