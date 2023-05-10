var student = {
    id: 101,
    name: 'naim',
    class: 'upto',
    marks: 95
}

var mobile = {
    brand: 'samsung',
    color: 'blue',
    price: 1500,
    processor: 's20',
    version: '1.5.2'
}

var myComputer = {
    brand: 'dell',
    color: 'black',
    price: 35000,
    storage: '64gb',
    processor: 'd28'
}

console.log(myComputer);
console.log(myComputer.price);
console.log(myComputer.color);
console.log(Object.keys(myComputer));
console.log(Object.values(myComputer));

console.log(myComputer);
myComputer.brand = 'dell max';
console.log(myComputer);

console.log(myComputer.brand);