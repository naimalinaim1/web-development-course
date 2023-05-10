function sumArray (array) {
    const typeArray = typeof array;
    if (typeArray == 'object' || typeArray == 'array') {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    return 'Please provide an array';
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = sumArray(array);
console.log(total);