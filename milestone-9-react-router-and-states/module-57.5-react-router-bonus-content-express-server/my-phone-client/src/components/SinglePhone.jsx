import React from "react";
import { useLoaderData } from "react-router-dom";

const SinglePhone = () => {
  const phone = useLoaderData();
  console.log(phone);

  return (
    <div>
      <h4>{phone.name}</h4>
      <img src={phone.image} alt="" />
    </div>
  );
};

export default SinglePhone;
