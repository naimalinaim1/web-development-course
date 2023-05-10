function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

const factNum1 = factorial(4);
console.log(factNum1);

const factNum2 = factorial(5);
console.log(factNum2);