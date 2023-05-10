/**
 * loop
 * 1. write a loop that print I love .... -> 39 bar
 * 2. How does works while loop?
 * 3. How does works for loop?
 * 4. Who problem inside no change while variable?
 * 5. Write a code that print 58 to 98.
 * 6. Write a code that print 412 to 456 all even number.
 * 7. Write a code that print 581 to 623 all odd number.
 * 8. Different between while and for loop?
 * 9. Create an array by still now learning items.  and output all items using loop.
 * 10. Create an array by use mobile name. and output all mobile name.
 * 11. Run a for loop 30 to 86. break at a position number is 44.
 * 12. Create an array by total my book price. and if than price above 200, not output this book.
 */

// 1. write a loop that print I love .... -> 39 bar
var text = '';
for (let i = 1; i <= 39; i++) {
    text += 'I love ..... ';
}
console.log(text);

// 2. How does works while loop?
// How does works for loop?
/**
 * The loop checks the condition first,
 * and if return true,
 * the code within it runs.
 * The loop continues until the condition provide return false,
 * then stop.
 */

// 4. Who problem inside no change while variable?
// loop variable no change: this code run infinite.

// 5. Write a code that print 58 to 98.
var num = 58;
var toNum = '';
while (num <= 98) {
    toNum += num + ' ';
    num++;
}
console.log(toNum);

// 6. Write a code that print 412 to 456 all even number.
var num = '';
for (var i = 412; i <= 456; i += 2) {
    num += i + ' ';
}
console.log(num);

// 7. Write a code that print 581 to 623 all odd number.
var num = '';
for (var i = 581; i <= 623; i += 2) {
    num += i + ' ';
}
console.log(num);

// 8. Different between while and for loop?
/**
 * while loop
 * 1. variable declare first
 * 2. while inside condition
 * 2. while variable change in while body
 * for loop
 * 1. variable, condition, change variable value, inside for loop
 */

// 9. Create an array by still now learning items.  and output all items using loop.
var learItems = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND', 'SASS', 'JAVASCRIPT'];
for (let i = 0; i < learItems.length; i++) {
    console.log(learItems[i]);
}

// 10. Create an array by use mobile name. and output all mobile name.
var mobileNames = ['Symphony', 'Samsung'];
for (let i = 0; i < mobileNames.length; i++) {
    const element = mobileNames[i];
    console.log(element);
}

// 11. Run a for loop 30 to 86. break at a position number is 44.
for (let i = 30; i <= 86; i++) {
    if (i == 44) {
        console.log("break at position: ", i);
        break;
    }
}


// 12. Create an array by total my book price. and if than price above 200, not output this book.
var bookPrices = [100, 150, 80, 250, 200, 300, 160];
for (let i = 0; i < bookPrices.length; i++) {
    const element = bookPrices[i];
    if (element > 200) {
        continue;
    }
    console.log(element);
}
