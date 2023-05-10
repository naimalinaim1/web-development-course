const numbers = [12, 54, 65, 3, 54];
for (const number of numbers) {
    console.log(number);
}

const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
// for (const key of bottle) {
//     console.log(key);
// }


const keys = Object.keys(bottle);
for (const key of keys) {
    console.log(bottle[key]);
}

// for in loop
for (const key in bottle) {
    const value = bottle[key];
    console.log(key, value);
}

// advanced
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}