/**
 * isArray, includes, concat
 */
const array = [1, 2, 3, 4, 5, 6];
const ageLength = array.length;

const checkArray1 = Array.isArray(array);
const checkArray2 = Array.isArray(ageLength);

// console.log(checkArray1);
// console.log(checkArray2);

const checkValue1 = array.includes(5);
const checkValue2 = array.includes(9);

// console.log(checkValue1)
// console.log(checkValue2)

const otherArray = [33, 44, 55];
const newArray = array.concat(otherArray);

// console.log(newArray);
// console.log(array);
// console.log(otherArray);


/** slice, splice */
const charters = ['a', 'b', 'c', 'd', 'e'];

const partial = charters.slice(2, 4);
// console.log(partial);

const partialPartCut = charters.splice(2, 3, 'x', 'y', 'z');
// console.log(partialPartCut);

// console.log(charters)

/**
 * write foo, bar, foobar, if divisible by 3 or 5 or both
 */

function testFooBar (number) {
    for (let i=0; i<= number; i++) {
        if (i%3===0 && i%5===0) {
            console.log('Foobar');
        } else if (i%3===0) {
            console.log('Foo');
        } else if (i%5===0) {
            console.log('Bar');
        } else {
            console.log(i);
        }
    }
}
// testFooBar(50);

/** calculate wood required*/
/**
 * 
 * @param {number} chairQuantity 
 * @param {number} tableQuantity 
 * @param {number} bedQuantity
 */
function woodCalculate(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 6;
    const perTableWood = 16;
    const perBedWood = 66;

    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;

    const totalWoodRequired = chairWood + tableWood + bedWood;
    return totalWoodRequired;
    
}

const woodCal = woodCalculate(7, 5, 4);
// console.log(woodCal, 'cubic feet');


/**
 * get cheapest phone
 */
const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
    { name: 'shaomi m3', price: 12000, camera: 8, storage: 16 },
    { name: 'oppo a2', price: 17000, camera: 8, storage: 32 },
    { name: 'nokia n95', price: 8000, camera: 8, storage: 4 },
    { name: 'htc h81', price: 25000, camera: 8, storage: 16 }
];

/**
 * 
 * @param {array of objects} products 
 * @returns cheapest phone of object
 */
function getCheapest (products) {
    if (Array.isArray(products)) {
        let cheapestPhone = products[0];
        for (let i=0; i<products.length; i++) {
            const product = products[i];
            if (product.price < cheapestPhone.price) {
                cheapestPhone = product;
            }
        }
        return cheapestPhone;
    }
    return 'Please provide an array of objects';
}

const mySelection = getCheapest(phones);
// console.log(mySelection);



/** calculate shopping cart */
const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 3 },
    { name: 'belt', price: 600, quantity: 4 },
];

function calculateTotal (products) {
    if (Array.isArray(products)) {
        let totalCost = 0;
        for (let product of products) {
            let price = product.price * product.quantity;
            totalCost += price;
        }
        return totalCost;
    }
    return 'Please provide an array of object';
}

const totalCost = calculateTotal(shoppingCart);
// console.log(totalCost);

/** discount calculate */
function totalTicketCost (ticketQuantity) {
    if (typeof ticketQuantity === 'number') {
        const first100Rate = 100;
        const second200Rate = 90;
        const restRate = 70;

        if (ticketQuantity <= 100) {
            const totalCost =  ticketQuantity * first100Rate;
            return totalCost;
        } else if (ticketQuantity <= 200) {
            const first100Price = 100 * first100Rate;
            const restTicket = ticketQuantity - 100;
            const restTicketPrice = restTicket * 90;
            const totalCost = first100Price + restTicketPrice; 
            return totalCost;
        } else {
            const first100Price = 100 * first100Rate;
            const second200Price = 100 * second200Rate;
            const restTicket = ticketQuantity - 200;
            const restTicketPrice = restTicket * 70;
            const totalCost = first100Price + second200Price + restTicketPrice;
            return totalCost;
        }
    }
    return 'Please input a number';
}

const ticketCost = totalTicketCost(201);
// console.log(ticketCost);