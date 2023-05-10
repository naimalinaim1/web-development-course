import React, { useEffect, useState } from "react";
import { add, divided } from "../../utilities/calculate";
import { deleteShoppingCart } from "../../utilities/fakedb";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const first = 55;
  const second = 45;
  const total = add(first, second);
  const result = divided(first, second);

  /* const cosmetics = [
    { id: 1, name: "Alta", price: 2 },
    { id: 2, name: "Palis", price: 4 },
    { id: 3, name: "Malis", price: 2 },
    { id: 4, name: "Balis", price: 6 },
    { id: 5, name: "Nalis", price: 3 },
  ]; */

  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  // delete shopping cart
  const removeCart = () => deleteShoppingCart();
  // total cosmetic price
  const totalPrice = cosmetics.reduce((p, c) => p + c.price, 0);

  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      <p>
        <small>Total product price: {totalPrice}</small>
      </p>
      <button onClick={removeCart}>Delete Shopping Cart</button>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
