
// deposit button set event listener
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get new deposit amount
    const newDepositAmount = getInputFieldValueById('deposit-field');
    // get previous deposit amount
    const previousDepositAmount = getTextElementValueById('deposit-amount');
    const depositTotal = newDepositAmount + previousDepositAmount;
    setTextElementValueById('deposit-amount', depositTotal);

    // get previous balance 
    const previousBalanceAmount = getTextElementValueById('balance-amount');
    const newBalance = newDepositAmount + previousBalanceAmount;
    // set new balance
    setTextElementValueById('balance-amount', newBalance);
})
