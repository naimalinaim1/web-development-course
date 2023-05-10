import React from "react";
import { addToDB, removeToDB } from "../../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;

  const addToCart = (id) => {
    addToDB(id);
  };

  const removeToCart = (id) => {
    removeToDB(id);
  };

  //   const addToCartWithPara = () => addToCart(id);

  return (
    <div className="product">
      <h3>Buy this: {name}</h3>
      <p>Only for: ${price}</p>
      <p>
        <small>It has id: {id}</small>
      </p>
      {/* <button id="button" onClick={addToCartWithPara}>
        Add to Cart
      </button> */}
      <button id="button" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
      <button id="button" onClick={() => removeToCart(id)}>
        Remove to Cart
      </button>
    </div>
  );
};

export default Cosmetic;
