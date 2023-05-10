/**
 * javascript (recover)
 * ------------------------
 * variable   -> ok
 * array -> ok
 * condition -> ok
 * loop
 */
/** ------------------------------------------------------ */
// what is a variable?
// variable is the stored container
// var shorthand variable

var firstName = 'Naim ';
var lastName = 'Ali';
console.log(firstName + lastName);

// check a variable type
/**
 * number (Integer, float, bigint)
 * string (any charter)
 * boolean (true, false)
 */
var number = 1;
var floatNumber = 1.55555;
var string = 'keyboard';
var isHsc = false;

var typeOfNumber = typeof number;
var typeOfString = typeof string;
var typeOfBool = typeof isHsc;

console.log(typeOfNumber);
console.log(typeOfString);
console.log(typeOfBool);

// variable value length
var lengthOfString = string.length;
console.log(string + " ~ length: "+ lengthOfString);

// conversion (number and string)
// number to string
var number = 1;
console.log(number);
console.log(typeof number);
var numberToString = String(number);
console.log(numberToString);
console.log(typeof numberToString);

// string to number (integer or float point)
var stringNumber = "15555";
var number = Number(stringNumber);
console.log(stringNumber);
console.log(number);
console.log(typeof number);

var number = '100.525467195';
var integerNumber = parseInt(number);
console.log(integerNumber);

var floatNumber = parseFloat(number);
console.log(floatNumber);

var fixedFloatNumber = Number(parseFloat(number).toFixed(3));
console.log(fixedFloatNumber);


/** ------------------------------------------------------ */
// what is an array
// a array stored many value inside []

var fruits = ['Dates', 'fig', 'Apple', 'Orange', 'Banana'];
console.log(fruits);

// check array length
console.log("Array length: " + fruits.length);

// print individual value of this array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

// add last one items
fruits.push('Coconut');
console.log(fruits);
console.log("Now Array length: " + fruits.length);

// insert one items an array
fruits.unshift('Nut');
console.log(fruits);

// delete last one items an array
fruits.pop();
console.log(fruits);

// delete first one items an array

fruits.shift();
console.log(fruits);


// change 1st items 
console.log(fruits[1]);
fruits[1] = 'Other fig'
console.log(fruits[1]);

// replace Banana with Janina
var replaceItemsIndex = fruits.indexOf('Banana');
console.log(fruits[replaceItemsIndex]);
fruits[replaceItemsIndex] = 'Janina';
console.log(fruits[replaceItemsIndex]);


/** ------------------------------------------------------ */
/** condition statement */
/**
 * if else if else
 */

/* if (condition) {
    execute code 
} */

var num = 1;
if (num >= 1) {
    console.log("1 >= 1");
}

var num = false;
if (num == true) {
    console.log("Number is boolean true");
} else if (num == false) {
    console.log("Number is boolean false");
} else {
    console.log("Number is known tracker");
}


/** ------------------------------------------------------ */
/* javascript loop  */
/**
 * while loop
 * for loop
 * do while loop
 */

// while loop
var number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}

// for loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// loop with break
for (var i = 1; i <= 10; i++) {
    if (i == 4) { break; }
    console.log(i);
}
console.log("----");
// loop with continue
for (var i = 1; i <= 10; i++) {
    if (i/1.5 > 3 ) {continue; }
    console.log(i);
}

// even number
console.log("even number-------------");
for (var i = 2; i <= 10; i+=2) {
    console.log("Even number: ", i);
}

// odd number
console.log("\nodd number-------------");
for (var i = 1; i <= 10; i+=2) {
    console.log("Even number: ", i);
}