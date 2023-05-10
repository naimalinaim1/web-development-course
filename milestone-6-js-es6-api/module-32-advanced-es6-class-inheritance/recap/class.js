// class
class Common {
    name;
    brand;
    color;
    price;
    constructor (name, brand, color, price) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    descriptionCar () {
        return `This car is good quality. I suggest you buy this car.
Description: Car brand: ${this.brand}, Name: ${this.name}, Color: ${this.color}, Price: ${this.price}`;
    }
}

class MakeCar extends Common {
    constructor (name, brand, color, price) {
        super(name, brand, color, price);
    }
}

const car1 = new MakeCar('Xem Car', 'bnd-xm-22', 'skyblue', 1700000);
// const carName = car1.name;
// const price = car1.price;
// console.log(carName, price);
const description = car1.descriptionCar();
console.log(description);

const car2 = new MakeCar('Goos Boos', 'yym2', 'black', 2800000);
const descriptionCar2 = car2.descriptionCar();
console.log(descriptionCar2);
