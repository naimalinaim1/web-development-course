/**
 * array  -----
 * 1. what is an array? How does array works? How does declare an array?
 * 2. How to find out how many elements are in the array?
 * 3. what is array index? How much dose it start with and array elements change value using index number?
 * 4. What does an element's index value of -1 mean?
 * 5. How to find the value of an element in array with index?
 * 6. How to change the value of an element of an array at an index position
 * 7. How can you find the value of an element in an array, now its index
 * 8. Let's say you're looking for an element with an index. But without giving its value you get undefined. What do you understand by seeing that? (search google)
 * 9. How do add or remove last items in array?
 * 10. How do add or remove first items in array?
 * condition -----
 * 1. what is this: >, <, ==, !=, <=, >=, ===, !==, &&, ।। and how does work it?
 * 2. To you: if more than 80000 rupees you will buy mac, if more than 60 rupees you will buy gaming laptop, if more than 40 thousand rupees you will buy lenovo yoga computer, if more than 20 thousand rupees you will buy old laptop. Otherwise you will work with mobile.
 */

// 1. what is an array? How does array works? How does declare an array?
// An array is a collection of elements of the same type placed in contiguous memory locations that can be individually referenced by using an index to a unique identifier.
var nameOfArray = [1,2,3,4,5,6,7,8,9];
var stringOfArray = ['lorem', 'lorem', 'lorem', 'lorem'];

// 2. How to find out how many elements are in the array?
console.log(nameOfArray.length, stringOfArray.length);

// 3. what is array index? How much dose it start with and array elements change value using index number?
// Array indexing is the same as accessing an array element. You can access an array element by referring to its index number. The indexes in NumPy arrays start with 0, meaning that the first element has index 0, and the second has index 1 etc.
stringOfArray[1] = 'merol';
console.log(stringOfArray);

// 4. What does an element's index value of -1 mean?
// an elements index value of -1 meaning this element are not found an array?
console.log(stringOfArray.indexOf('lm'));

// 5. How to find the value of an element in array with index?
console.log(nameOfArray[0], nameOfArray[1]);

// 6. How to change the value of an element of an array at an index position
nameOfArray[8] = 99;
console.log(nameOfArray[8]);

// 7. How can you find the value of an element in an array, now its index
console.log(stringOfArray[1]);

// 8. Let's say you're looking for an element with an index. But without giving its value you get undefined. What do you understand by seeing that? (search google)
// this index is not available an array? example:
var und = [1,2];
console.log(und[0]); // return value 1
console.log(und[1]); // return value 2\
console.log(und[3])  // return value undefined

// 9. How do add or remove last items in array?
console.log(nameOfArray);
nameOfArray.push(100);
console.log(nameOfArray);
nameOfArray.pop();
console.log(nameOfArray);

// 10. How do add or remove first items in array?
stringOfArray.unshift('naim');
console.log(stringOfArray);
stringOfArray.shift();
console.log(stringOfArray);



// condition
// 1. what is this: >, <, ==, !=, <=, >=, ===, !==, &&, ।। and how does work it?
// This is operator
if (true > false) {
    console.log("yes");
}

if (true < false) {
    console.log('yes');
} else {
    console.log('no');
}

if (true == true) {
    console.log('yes');
}
console.log(true != false);
console.log(true <= false);
console.log(true >= false);
console.log(true === 'true');
console.log(true !== 'false');

/**
 * 2. To you: if more than 80000 rupees you will buy mac,
 * if more than 60 rupees you will buy gaming laptop,
 * if more than 40 thousand rupees you will buy lenovo yoga computer,
 *  if more than 20 thousand rupees you will buy old laptop.
 *  Otherwise you will work with mobile.
 */

var budget = 80000;

if (budget >= 80000) {
    console.log("buy mac");
} else if (budget >= 60000) {
    console.log('buy laptop');
} else if (budget >= 40000) {
    console
    .log('buy computer');
} else if (budget >= 20000) {
    console
    .log('buy old laptop');
} else {
    console
    .log('buy mobile');
}