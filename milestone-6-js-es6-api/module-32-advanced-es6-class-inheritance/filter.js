const numbers = [12, 3, 5, 8, 9, 11, 26, 45, 55, 61, 39];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2 === 0);
const odd = numbers.filter(num => num % 2 !== 0);

console.log(bigNums);
console.log(tiny);
console.log(even);
console.log(odd);

const products = [
    {id: 1, name: 'laptop', price: 28000},
    {id: 2, name: 'computer', price: 88000},
    {id: 3, name: 'mobile', price: 22000},
    {id: 4, name: 'tablet', price: 36000},
];

const expensive = products.filter(product => product.price > 100000);
const expensive2 = products.filter(product => product.price > 32000);
console.log(expensive);
console.log(expensive2);