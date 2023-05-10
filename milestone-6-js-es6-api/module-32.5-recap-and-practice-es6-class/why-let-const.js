// when variable value reassignment. Exm:
let number = 10;
number = 15;
console.log(number);

// when variable value is not reassignment. Exm:
const pi = 3.141592;
try {
    pi = 3.14; /* error  **/
} catch (error) {
    console.log(error.message);
}
console.log(pi)