import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, phone, email } = friend;
  return (
    <div
      style={{
        border: "2px solid goldenrod",
        margin: "10px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h3>{name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <p>
        <Link to={`/friend/${id}`}>show me details</Link>
      </p>
    </div>
  );
};

export default Friend;
