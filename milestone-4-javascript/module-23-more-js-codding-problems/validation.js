function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide number';
    }
    return num1 + num2;
}

const result = add(45, 45);
console.log(result);