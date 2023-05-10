function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const treeInches = 350;
const treeFeet = inchToFeet(treeInches);
console.log(treeFeet);

let heightInch = 100;
let heightFeet = inchToFeet(heightInch);
