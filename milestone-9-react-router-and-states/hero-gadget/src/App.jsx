import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { cart, products } = useLoaderData();
  const [cartArray, setCartArray] = useState(cart);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={{ cartArray, setCartArray }}>
        <Header />
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet />
        </div>
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
