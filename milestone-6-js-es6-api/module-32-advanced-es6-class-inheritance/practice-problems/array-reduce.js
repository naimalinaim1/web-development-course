const numbers = [1, 9, 17, 22];
const sum = numbers.reduce((previous, current) => previous + current, 0);
console.log(sum);

let total = 0;
for (const num of numbers) {
    total += num;
}
console.log(total);