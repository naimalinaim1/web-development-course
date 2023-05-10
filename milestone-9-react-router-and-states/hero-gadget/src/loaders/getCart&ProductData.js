import { getStoredCart } from "../utilities/fakeDB";

export const productsAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const savedCart = getStoredCart();

  let cart = [];
  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      foundProduct.quantity = savedCart[id];
      cart.push(foundProduct);
    }
  }
  return { cart, products };
};
