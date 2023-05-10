// feet to inch converter
function feetToInch (feet) {
    if (typeof feet === 'number') {
        return 12*feet;
    }
    return 'Please input a number';
}


// centimeter to meter converter
function centimeterToMeter (centimeter) {
    if (typeof feet === 'number') {
        return centimeter/100;
    }
    return 'Please input a number';
}


// total paper requirements 
function paperRequirements (book1Quantity, book2Quantity, book3Quantity) {
    if (typeof book1Quantity !== 'number' || typeof book2Quantity !== 'number' || typeof book3Quantity !== 'number') {
        return 'paperRequirements function says: Please input number';
    }
    const perPaperBook1 = 100;
    const perPaperBook2 = 200;
    const perPaperBook3 = 300;

    const totalBook1Papers = book1Quantity * perPaperBook1;
    const totalBook2Papers = book2Quantity * perPaperBook2;
    const totalBook3Papers = book3Quantity * perPaperBook3;

    // total paper required
    const totalPapers = totalBook1Papers + totalBook2Papers + totalBook3Papers;
    
    return totalPapers;
}


// get largest element length of an array
function bestFriend (friends) {
    if (Array.isArray(friends)  === false) {
        return 'bestFriend say: Please input an array';
    }

    let bigName = friends[0];

    for (friendName of friends) {
        if (bigName.length < friendName.length) {
            bigName = friendName;
        }
    }
    return bigName;
}


// return only positive number of an array
function onlyPositive (numbers) {
    let onlyPositiveNumber =[];
    for (number of numbers) {
        if (number < 0) {
            break;
        }
        onlyPositiveNumber.push(number)
    }
    return onlyPositiveNumber;
}
