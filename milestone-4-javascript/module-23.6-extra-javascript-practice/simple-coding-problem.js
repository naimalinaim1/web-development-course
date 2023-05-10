function foo() {
    console.log('foo')
    bar();
}
function bar() {
    console.log('bar');
}
// foo();


// console.log('Naim ali'.toLowerCase())
// console.log('Naim ali'.toUpperCase())

const array = ['naim', 'ali', 'hosen', 'abule', 'kabule']
/* console.log(array.includes('ali'));
console.log(array.includes('Naim')); */

/* console.log(array.indexOf('Naim'))
console.log(array.indexOf('hosen')) */

// console.log('I am naim'.startsWith('I'))
// console.log('I am naim'.endsWith('naim'))

const text =  'I am naim. this is boy';
// console.log(text.split(''))
// console.log(text.split(' '))
// console.log(text.split('.'))
// console.log(text.split('m'))

// console.log(text.slice(2, 6))
// console.log(text)

// console.log(text.substring(0, 4))
// console.log(text)

// const txtJoin = text.split('');
// console.log(txtJoin.reverse().join(''))


// console.log(Math.pow(2, 3))
const firstAge = 25;
const otherAge = 50;

const different = firstAge - otherAge;
// if ( Math.abs(different) < 10) {
//     console.log('you are friends');
// } else {
//     console.log('you are not friends')
// }

// console.log(Math.round(3.5))
// console.log(Math.round(3.4))
// console.log(Math.round(3.9))

// console.log(Math.ceil(2.1))
// console.log(Math.floor(2.5))

// console.log(Math.round(Math.random() * 10) + 10)

let first = 5;
let second = 7;
let temp = first;
first = second;
second = temp;
// console.log(first, second)
let a = 1;
let b = 5;
[a, b] = [b, a];
// console.log(a, b);


let fibonacci = [0, 1];
for (let i = 2; i <= 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
// console.log(fibonacci);







