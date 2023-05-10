function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
var num = 10;
var evenNum = isEven(num);
console.log(num, evenNum);

var num = 5;
var evenNum = isEven(num);
console.log(num, evenNum);