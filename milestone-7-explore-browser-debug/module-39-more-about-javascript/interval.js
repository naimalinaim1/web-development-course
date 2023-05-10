console.log(1);
console.log(2);
let num = 1;
const timeoutId = setTimeout(() => {
    console.log('lazy')
}, 1800);

const intervalID = setInterval(() => {
  console.log(num++);
}, 700);

setTimeout(() => {
    clearInterval(intervalID);
}, 2800)

clearTimeout(timeoutId);
console.log(4);
console.log(5);
