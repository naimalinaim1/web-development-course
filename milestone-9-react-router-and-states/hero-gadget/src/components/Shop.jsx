import React, { useContext } from "react";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "../utilities/fakeDB";
import { CartContext, ProductContext } from "../App";

const Shop = () => {
  const { cartArray, setCartArray } = useContext(CartContext);
  const productData = useContext(ProductContext);

  //   Card button handler
  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cartArray.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cartArray, product];
    } else {
      const rest = cartArray.filter((pd) => pd.id !== product.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCartArray(newCart);
    addToDb(product.id);
  };

  return (
    <section className="product-container">
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          handleAddToCart={handleAddToCart}
          product={product}
        />
      ))}
    </section>
  );
};

export default Shop;
