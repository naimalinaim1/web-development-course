function sum (a, b) {
    console.log(arguments);
    return a + b;
}
const total = sum(1, 2, 3, 4, 5, 6);
console.log(total);