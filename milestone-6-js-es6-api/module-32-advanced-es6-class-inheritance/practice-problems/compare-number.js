const numbers =[33, 50, 79, 78, 90, 101, 30];
const searchFirst = numbers.find(num => num % 10 === 0);
const findNumbers = numbers.filter(num => num % 10 == 0);

console.log(searchFirst);
