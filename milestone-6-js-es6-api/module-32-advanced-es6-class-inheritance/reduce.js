const numbers = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value);
// accumulatorFunction has two parameters
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
} , 0);
console.log(total);