const obj = {
    name: 'naim',
    des: {
        age: 18,
        gender: 'male'
    }
}

console.log(obj.des?.genders)


const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((p, c) => p + c, 0);
console.log(total);