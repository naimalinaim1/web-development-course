function factorial(num) {
    let fact = 1;
    let i = num;
    while (i >= 1) {
        fact *= i;
        i--;
    }

    return fact;
}

console.log(factorial(5));