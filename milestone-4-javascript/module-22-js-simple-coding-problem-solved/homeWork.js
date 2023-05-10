function maxNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    return num3;
}
console.log(maxNum(1,22,4))

function minNum(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    return num3;
}
console.log(minNum(2,3,1))

function maxUsMath(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(maxUsMath(1,2,33))

function minUsMath(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}
console.log(minUsMath(2,51,3))