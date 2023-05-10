import React from "react";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();

  return (
    <div>
      <h1>Food details: {food}</h1>
    </div>
  );
};

export default FoodDetails;
