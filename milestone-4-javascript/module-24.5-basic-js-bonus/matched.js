const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number)
}

for (const number of numbers) {
    // console.log(number);
}

const products = [
    {id: 1, name: 'iPhone', price: 12000},
    {id: 2, name: 'samsung phone', price: 48000},
    {id: 3, name: 'Mac Laptop', price: 360000},
    {id: 4, name: 'Dell Laptop', price: 250000},
    {id: 5, name: 'ix phone', price: 29000},
];

function matchPhone (products, search) {
    const searchPhone = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            searchPhone.push(product);
        }
    }
    return searchPhone;
}


const phone = matchPhone(products, 'phone');
console.log(phone);