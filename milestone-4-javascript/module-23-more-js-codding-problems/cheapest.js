const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
    { name: 'shaomi m3', price: 12000, camera: 8, storage: 16 },
    { name: 'oppo a2', price: 17000, camera: 8, storage: 32 },
    { name: 'nokia n95', price: 8000, camera: 8, storage: 4 },
    { name: 'htc h81', price: 25000, camera: 8, storage: 16 }
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);

function cheapestStorage(phones) {
    let noCheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.storage > noCheapest.storage) {
            noCheapest = phone;
        }
    }
    return noCheapest;
}

const bigStorage = cheapestStorage(phones);
console.log(bigStorage);