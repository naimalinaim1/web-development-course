const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;

  productField.value = "";
  quantityField.value = "";

  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const productItem = document.createElement("li");
  productItem.innerHTML = `${product}: ${quantity}`;
  productContainer.appendChild(productItem);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  for (const product in savedCart) {
    displayProduct(product, savedCart[product]);
  }
};

displayProductFromLocalStorage();
