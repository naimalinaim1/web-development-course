let i = 9;
function recursion () {
    if (i >= 10) {
        return 0;
    }
    i++;
    console.log(1);
    recursion();
}
recursion();


function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num-1);
}
console.log(factorial(3));


function descendNum (startNum) {
    console.log(startNum);
    let nextNum = startNum - 1;
    if (nextNum > 0) {
        descendNum(nextNum);
    }
}
descendNum(3);

function stringRev (text) {
    if (text.length === 1) {
        return text;
    } else {
        return text.slice(-1) + stringRev(text.slice(0, -1))
    }
}
console.log(stringRev('abc'))
