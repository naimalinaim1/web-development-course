const personName = "known";
const des = `My name is: ${personName}`;
// console.log(des);

const number1 = [1, 2, 3, 4, 5, 6];
// console.log(Math.max(...number1));

const newArray = [...number1, 7];
// console.log(newArray);

const newArray2 = newArray.filter((num) => num !== 5);
// console.log(newArray2)

const first = () => console.log("arrow function");
const second = (num = 1) => console.log(num);
const third = (num1 = 1, num2 = 1) => console.log(num1 + num2);
const four = () => {
  const random = Math.random();
  return random;
};
// first();
// second(5);
// third(2, 3);
// console.log(four());

const { name, age } = { name: "naim ali", age: 18 };
// console.log(name, age);

const [_first, _second] = [1, 2];
// console.log(_first, _second);
