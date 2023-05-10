function inchToFeet(inch) {
    return inch * 12;
}
// console.log(inchToFeet(6.3305))

function mileToKilometer (miles) {
    return miles * 1.60934;
}
// console.log(mileToKilometer(140))

function checkOddEven (num) {
    if (num % 2 === 0) {
        return 'even';
    }
    return 'odd';
}
// console.log(checkOddEven(56))

function isLeapYear (year) {
    if (year % 4 === 0) {
        return 'Leap year';
    }
    return 'Not leap year';
}
// console.log(isLeapYear(2012));


function sumArray (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5]
// console.log(sumArray(numbers));

function sumOddNumArray (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element % 2 != 0) {
            sum += element;
        }
    }
    return sum;
}

const number = [1, 2, 3, 4, 5]
// console.log(sumOddNumArray(number))

function factNum (num) {
    if (typeof num !== 'number') {
        return 'please input a number'
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

// console.log(factNum(7))

