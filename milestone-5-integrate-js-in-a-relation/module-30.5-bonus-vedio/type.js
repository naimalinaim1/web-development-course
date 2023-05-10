const number = 112;
if (typeof number === 'number') {
    console.log('value is a number');
} else {
    console.log('value is not a number');
}

const numbers = [1, 2, 3, 4, 5];
const students = {name: 'known', job: '....'}
console.log(Array.isArray(numbers))
console.log(Array.isArray(students))
console.log(typeof students);

const isNum = 'adf';
if (isNaN(isNum)) {
    console.log('this is not a number');
} else {
    console.log('this is number')
}