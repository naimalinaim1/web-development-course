const divideFive = num => num / 5;
const result = divideFive(98);
console.log(result);

const addMul = (num1, num2) => (num1 + 2) * (num2 + 2);
console.log(addMul(3, 3));

const mulThreeNum = (num1, num2, num3) => num1 * num2 * num3;
console.log(mulThreeNum(2, 3, 4));

const cal = (num1, num2) => {
    const firstNum = num1 + 2;
    const lastNum =  num2 + 2;
    const mul = firstNum * lastNum;
    return mul;
}
console.log(cal(3, 6));