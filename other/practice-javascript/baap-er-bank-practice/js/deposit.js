// validation deposit field
document.getElementById('deposit-field').addEventListener('keyup', function (event) {
    checkInput(event);
})
// deposit button  add event listener
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get deposit new amount
    const newDepositAmount = getInputValueById('deposit-field')
    if (!newDepositAmount) {
        return;
    }
    
    // previous deposit amount
    const previousDepositAmount = getTextElementValueById('total-deposit');

    // calculate total deposit
    const currentDeposit = newDepositAmount + previousDepositAmount;
    setTextElementValueById('total-deposit', currentDeposit);

    // total balance calculate
    const previousBalanceAmount = getTextElementValueById('total-balance');
    const currentBalance = previousBalanceAmount + newDepositAmount;
    setTextElementValueById('total-balance', currentBalance);
})