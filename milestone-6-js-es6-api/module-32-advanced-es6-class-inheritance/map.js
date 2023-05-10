const numbers = [1, 2, 3, 4, 5];

function getDoubled (numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = double(number)
        output.push(doubled);
    }
    return output;
}

const double = num => num * 2;
const result = getDoubled(numbers)

const makeDoubled = numbers.map(double);
const makeDoubledDir = numbers.map(num => num * 2);
const makeDoubledDir2 = numbers.map(x => x * 2);
const makesFive = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(result);
console.log(makeDoubled);
console.log(makeDoubledDir)
console.log(makeDoubledDir2)
console.log(makesFive);