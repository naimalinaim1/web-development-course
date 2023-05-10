function discount(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketPrice = 70;

    if (ticketQuantity <= 100) {
        const firstCost =  ticketQuantity * first100Rate;
        return firstCost;
    } else if (ticketQuantity <= 200) {
        const firstCost = 100 * first100Rate;
        const restTicket = ticketQuantity - 100;
        const restCost = restTicket * second100Rate;
        const totalRestCost = firstCost + restCost;
        return totalRestCost;
    } else {
        const firstCost = 100 * first100Rate;
        const secondCost = 100 * second100Rate;
        const restTicket = ticketQuantity - 200;
        const restTicketCost = restTicket * 70;
        const totalCost = firstCost + secondCost + restTicketCost;
        return totalCost;
    }
}

const ticketCalculate = discount(250);
console.log('total Cost:', ticketCalculate);