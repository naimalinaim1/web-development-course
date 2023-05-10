let fDate = performance.now();
// declare array, length, index
const names = ['naim', 'alamin', 'program', 'korim', 'naim'];

// console.log(names);
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])

// console
// .log(names.length);


// array indexedDB, get and set by index, indexOf

// console.log(names[3]);
const myName = names[0];
// console.log(myName);

// console.log(names.indexOf('naim'))
// console.log(names.indexOf('program'))
// console.log(names.indexOf('naim ali'))
// console.log(names.lastIndexOf('naim'))

// add or remove element from array using push, pop
// console.log(names);
const removeRtn = names.pop();
// console.log(names);

names.push('Naim Ali');
// console.log(names);

names[0] = "Hi, I'a naim";
// console.log(names);

names[names.length] = 'add one by one'
// console.log(names);


const firstNumber = 10;
const lastNumber = 9;

// console.log(firstNumber == lastNumber);
// console.log(2 != 3);
// console.log(5 < 8);
// console.log(1 > 2);
// console.log(1 >= 1);
// console.log(1 <= 1);

if (firstNumber === lastNumber) {
    // console.log(firstNumber, lastNumber, 'equal')
} else {
    // console.log(firstNumber, lastNumber, 'not equal')
}

// handle multiple condition and or

if (4 > 2 && 4 < 2) {
    // console.log('if block execute');
} else if (true > false || false > true) {
    // console.log('else if block execute');
} else {
    // console.log('else block execute');
}

const fNum = 10;
const lNum = 50;
if (fNum > lNum) {
    // console.log(fNum, 'is grater than', lNum);
} else {
    // console.log(lNum, 'is grater than', fNum);
}


let lDate = performance.now();

// console.log(fDate)
// console.log(lDate)
// console.log(lDate - fDate);
