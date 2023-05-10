const numbers = [12, 3, 5, 8, 9, 11, 26, 45, 55, 61, 39];
const findNum = numbers.find(num => num % 3 === 0);
const findAllNum = numbers.filter(num => num % 3 === 0);

console.log(findNum);
console.log(findAllNum);

const products = [
    {id: 1, name: 'laptop', price: 28000},
    {id: 2, name: 'computer', price: 88000},
    {id: 3, name: 'mobile', price: 22000},
    {id: 4, name: 'tablet', price: 36000},
];

const cheap1 = products.find(product => product.price < 35000);
const cheap2 = products.filter(product => product.price < 23000);
console.log(cheap1);
console.log(cheap2);
