const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pair = Object.entries(bottle);

console.log(keys);
console.log(values);
console.log(pair);

// Object.seal(bottle);
Object.freeze(bottle);
console.log(bottle);
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);