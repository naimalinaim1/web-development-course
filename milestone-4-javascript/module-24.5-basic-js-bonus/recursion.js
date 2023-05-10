function printNum (num) {
    if (num == 0) {
        return;
    }
    console.log(num);
    printNum(num - 1);
}
printNum(5);

function sumNum (num) {
    if (num == 1) {
        return 1;
    }
    return num + sumNum(num - 1);
}
const result = sumNum(5);
console.log(result);

function factNum (num) {
    if (num == 1) {
        return 1;
    }
    return num * factNum(num - 1);
}
const factResult = factNum(5);
console.log(factResult);
