// use local storage to manage cart data
let shoppingCart;
const setShoppingCart = () => localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

const addToDB = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    // get cart
    shoppingCart = storedCart ? JSON.parse(storedCart) : {};
    // add quantity
    shoppingCart[id] ? shoppingCart[id] += 1 : shoppingCart[id] = 1;
    setShoppingCart();
}

const removeToDB = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    shoppingCart = storedCart ? JSON.parse(storedCart) : {};
    delete shoppingCart[id];
    setShoppingCart();
}

const deleteShoppingCart = () => localStorage.removeItem('shopping-cart');


export {
    addToDB,
    removeToDB,
    deleteShoppingCart
}