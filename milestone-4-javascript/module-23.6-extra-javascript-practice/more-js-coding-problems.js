const arr = [1, 2, 3, 4, 5, 6];
if (Array.isArray(arr)) {
    // console.log('this is array')
} else {
    // console.log('this is no array')
}

// console.log(arr.slice(0, 3))
// console.log(arr)

// console.log(arr.splice(0, 3))
// console.log(arr)


const names = ['abul', 'babul', 'cabul', 'dabul', 'abul', 'cabul', 'ebul']

function remDup (arr) {
    const remDuplicate = [];
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (remDuplicate.indexOf(ele) === -1) {
            remDuplicate.push(ele);
        }
    }
    return remDuplicate;
}

// console.log(remDup(names));

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log('foobar')
    } else if (i % 3 === 0) {
        // console.log('foo')
    } else if (i % 5 === 0) {
        // console.log('bar')
    } else {
        // console.log(i);
    }
}

function woodRequired(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 5; // cft
    const perTableWood = 12; // cft
    const perBedWood = 50; //cft

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

// console.log(woodRequired(1, 2, 2))

const phones = [
    {name: 'oppo', price: 15000},
    {name: 'xiome', price: 18000},
    {name: 'nokia', price: 23000},
    {name: 'samsung', price: 1600}
];

function cheapestPhone (products) {
    let cheapest = products[0];
    for (productItems of products) {
        if (productItems.price < cheapest.price) {
            cheapest = productItems;
        }
    }
    return cheapest;
}
// console.log(cheapestPhone(phones));

function totalPrice (products) {
    if (Array.isArray(products) === false) {
        return 'please input an array'
    }
    let total = 0;
    for (const productItems of products) {
        total += productItems.price;
    }
    return total;
}

// console.log(totalPrice(phones));
