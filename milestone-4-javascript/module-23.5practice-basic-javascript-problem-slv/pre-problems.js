function radianToDegree (radian) {
    if (typeof radian === 'number') {
        return Number((radian * 57.2958).toFixed(2));
    }
    return 'Error: radianToDegree says: please input a number!!!';
}

function isJavaScriptFile (fileName) {
    if (typeof fileName === 'string') {
        if(fileName.endsWith('.js')) {
            return true;
        }
        return false;
    }
    return 'Error: isJavaScriptFile says: please input a string!!!';
}


function oilPrice (diesel, petrol, octane) {
    if (typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number') {
        return 'Error: oilPrice says: please input number'
    }
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const totalDieselCost = diesel * dieselPrice;
    const totalPetrolCost = petrol * petrolPrice;
    const totalOctanePrice = octane * octanePrice;

    const totalOilCost = totalDieselCost + totalPetrolCost + totalOctanePrice;

    return totalOilCost;
}

function publicBusFare (members) {
    if (typeof members !== 'number' || members < 0) {
        return 'Error: publicBusFare says: please input positive number';
    }
    const busMembers = 50;
    const microbusMembers = 11;

    const publicBusPerTicket = 250;

    let restBusPeople = members % 50;
    let restMicroBusPeople = restBusPeople % 11;

    const totalCost = restMicroBusPeople * publicBusPerTicket;
    return totalCost;
}
