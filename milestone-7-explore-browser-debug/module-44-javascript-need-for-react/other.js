const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const square = numbers.map((num) => Math.pow(num, 2));
numbers.forEach((num) => {
  // console.log(num);
});

const filterByOp = numbers.filter((num) => num % 2);
const partiCular = numbers.find((num) => num > 3);


// console.log(partiCular)
// console.log(filterByOp);
// console.log(square)
