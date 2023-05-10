let first = 5;
let second = 7;

// first = second;
// second = first;

const temp = first;
first = second;
second = temp;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);