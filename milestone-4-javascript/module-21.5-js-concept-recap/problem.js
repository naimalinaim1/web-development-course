let myDays = 25;
let totalCost = 0;
/**
 * first 1 to 10 day per price 500
 * second 11 to 20 day per price 300
 * third 21 to any day per price 100
 */ 
const firstDayPerPrice = 500;
const secondDayPerPrice = 300;
const lastDayPerPrice = 100;

if (myDays <= 10) {
    totalCost += myDays * firstDayPerPrice;
} else {
    if (myDays >= 10) {
        totalCost += 10 * firstDayPerPrice;
        myDays -= 10;
    }
    if (myDays <= 10) {
        totalCost += myDays * secondDayPerPrice;
    } else {
        if (myDays >= 10) {
            totalCost += 10 * secondDayPerPrice;
            myDays -= 10;
        }
        if (myDays != 0) {
            totalCost += myDays * lastDayPerPrice;
        }
        
    }

}
console.log(totalCost);