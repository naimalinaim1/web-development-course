// global context  (global execution context) GEC
let a = 5;
function add(num1, num2) {
  // function context (function execution context) FEC
  const result = num1 + num2 + a;
  return result;
}
const sum = add(4, 5);
console.log(sum);
