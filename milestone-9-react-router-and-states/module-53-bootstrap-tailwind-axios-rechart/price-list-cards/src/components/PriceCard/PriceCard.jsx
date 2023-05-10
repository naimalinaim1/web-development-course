import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ pricing }) => {
  const { name, price, features } = pricing;
  return (
    <div className="flex flex-col border border-gray-500 p-4 rounded">
      <p className="text-center">
        <span className="text-5xl font-extrabold text-green-600">{price}</span>
        <span className="text-2xl font-medium">/Mon</span>
      </p>
      <p className="text-2xl text-center font-semibold">{name}</p>
      <p className="text-xl font-bold mt-8 mb-2">Features:</p>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature} />
      ))}
      <button className="w-full mt-auto border duration-200 bg-green-500 hover:bg-white hover:text-green-500 hover:border hover:border-green-500  py-2 text-white font-semibold rounded-lg">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
