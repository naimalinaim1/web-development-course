// variable
let myName = "Naim Ali";
const otherName = "Alamin Islam";
const myNameTypeOf = typeof myName;
// console.log(myNameTypeOf);

// condition
if (true === true && true !== false || true > false && false > true || true >= false || true <= false) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

// array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const len = numbers.length;
const pus = numbers.push(10);
const pop = numbers.pop();
const ind = numbers.indexOf(3);
const inc = numbers.includes(5);

// for loop, while
for (let i = 0; i < numbers.length; i++) {
    const ele = numbers[i];
    // console.log(ele);
}

while (true) {
    console.log(1);
    break;
}

// function 
function myFunction (num) {
    console.log('I am learning fundamental in js');
    return num * num;
}
const xyz = myFunction(5);
console.log(xyz);

// object
const person = {
    fullName: 'Person',
    learn: ['html', 'css', 'js', 'upcoming react']
}
// console.log(person);