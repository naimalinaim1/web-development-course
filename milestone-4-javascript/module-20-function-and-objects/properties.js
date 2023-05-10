var shoppingCart = {
    books: 1,
    computer: 1,
    mouse: 2,
    keyboard: 2,
    ram: 2
}

// get properties values
console.log(shoppingCart);
console.log(shoppingCart.keyboard);

// get all keys in object 
var allKeys = Object.keys(shoppingCart);
console.log('keys:', allKeys);

// get all values in object 
var allValues = Object.values(shoppingCart);
console.log('keys:', allValues);

// set properties value 3 way
shoppingCart.keyboard = 10;
console.log(shoppingCart.keyboard);

shoppingCart['mouse'] = 8;
console.log(shoppingCart.mouse);

var property = allKeys[2];
shoppingCart[property] = 3;
console.log(shoppingCart[property]);

console.log(shoppingCart);