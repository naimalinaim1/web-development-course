const data = {name: 'pandey', job: 'ande'}
// object constructor
const person = new Object();
const person1 =  Object();
console.log(person);
console.log(person1);

const items = Object.create(null);
console.log(items);

const chan = Object.create(data);
console.log(chan)
console.log(chan.name)
console.log(chan.friend)

function Car (model, price) {
    this.model = model;
    this.price = price;
}

const car = new Car('mml', 21);
console.log(car);