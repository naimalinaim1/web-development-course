/**
 * Variable
 * ৩. ভেরিয়েবল কি জিনিস?
 * ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
 * ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
 * ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
 * ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 
 * ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
 * ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
 * ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
 * ১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
 * ১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 
 * 
 */

/**
 * 1. what is variable?
 * 2. how does declare a variable?
 * 3. how does change a variable value?
 * 4. how many type of variable?
 * 5. what is javascript primitive and non primitive data types? example with say
 * 6. how do declare a variable naming convention?
 * 7. how does work =, -, *, /, % with between two variable?
 * 8. get shorthand knowledge: +=, -=, *=, /=
 * 9. ++ and -- there working purpose?
 * 10. what is these: -> parseInt, parseFloat, toFixed?
 */

// 1. what is variable?
// A variable is a named storage location in a computer's memory that stores a value that can be modified or retrieved during the runtime of program.

// 2. how does declare a variable?
var name_of_variable = 'value'; // snakes case
var nameOfVariable = 'value'; // camel case
var NameOfVariable = 'value'; // Pascal case

console.log(name_of_variable, nameOfVariable, NameOfVariable);

// 3. how does change a variable value?
name_of_variable = 'change value';
nameOfVariable = 'change value';
NameOfVariable = 'change value';

console.log(name_of_variable, nameOfVariable, NameOfVariable);

// 4. how many type of variable?
var number = 1;
var string = 'lorem';
var bool = true;
var empty;
var noValue = null;

console.log(number, typeof number, string, typeof string, bool, typeof bool, empty, typeof empty, noValue, typeof noValue);

// 5. what is javascript primitive and non primitive data types? example with say
/**
 * primitive data types
 *  1. number
 *  2. string
 *  3. boolean
 *  4. undefined
 *  5. null
 * 
 * non primitive data types
 *  1. object
 */

// 6. how do declare a variable naming convention?

/**
 * variable naming convention
 * right
 *  1. variable name start string or _ or $
 *  2. variable name less than 32 charter
 *  3. best practice use camelCase
 * wrong
 *  1. variable name start number
 *  2. variable name no gap
 * 
 */

// example
var variableName = 'value';
var _variableName = 'value';
var $variableName = 'value';

console.log(variableName, _variableName, $variableName);

// wrong
// var 2name = 'value';
// var name variable = 'value';


// 7. how does work =, +, -, *, /, % with between two variable?
var name = 'lorem';
var num1 = 2;
var num2 = 1;

var sum = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var dev = num1 / num2;
var mod = num1 % num2;

console.log(sum, sub, mul, dev, mod);


// 8. get shorthand knowledge: +=, -=, *=, /=
var num = 1;

num += 1;
console.log(num)

num -= 1;
console.log(num)

num *= 1;
console.log(num)

num /= 1;
console.log(num)


// 9. ++ and -- there working purpose?

var num = 1;
num++;
console.log(num);

num--;
console.log(num);


// 10. what is these: -> parseInt, parseFloat, toFixed?
var stringNumber = '12.22';
console.log(parseInt(stringNumber));

var floatNumber = '1.5555';
console.log(parseFloat(floatNumber));

console.log(Number(parseFloat(floatNumber).toFixed(2)));
