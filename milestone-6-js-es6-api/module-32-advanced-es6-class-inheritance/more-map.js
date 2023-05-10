const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const half2 = numbers.map(function (x) {
    return x/2;
});
const thirds = numbers.map(x => x/3);
console.log(half);
console.log(half2);
console.log(thirds);

const friends = ['Raihan', 'Kholil', 'albet', 'inistan'];
const fristLetter = friends.map(friend => friend[0]);
const friendLength = friends.map(f => f.length);

console.log(fristLetter);
console.log(friendLength);

const products = [
    {id: 1, name: 'laptop', price: 28000},
    {id: 2, name: 'computer', price: 88000},
    {id: 3, name: 'mobile', price: 22000},
    {id: 4, name: 'tablet', price: 36000},
];
const itemsName = products.map(product => product.name);
const itemsPrice = products.map(p => p.price);
console.log(itemsName);
console.log(itemsPrice);