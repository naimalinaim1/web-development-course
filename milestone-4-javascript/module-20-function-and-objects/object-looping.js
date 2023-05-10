var shoppingCart = {
    books: 1,
    computer: 1,
    mouse: 2,
    keyboard: 2,
    ram: 2
}

var keys = Object.keys(shoppingCart);

for (var i=0; i<keys.length; i++) {
    const propName = keys[i];
    const propValue = shoppingCart[propName];
    // console.log(propName, propValue);
}

for (var propName in shoppingCart) {
    const propValue = shoppingCart[propName];
    console.log(propName, propValue);
}

var entries = Object.entries(shoppingCart);
console.log(entries);