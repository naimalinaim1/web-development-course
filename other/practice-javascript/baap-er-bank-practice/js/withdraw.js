// validation withdraw field
document.getElementById('withdraw-field').addEventListener('keyup', function (event) {
    // get current balance
    let previousBalanceAmount = getTextElementValueById('total-balance');
    checkInput(event);
    const withdrawAmount = Number(event.target.value);
    if (withdrawAmount > previousBalanceAmount) {
        alert('Baap Er Bank ke eto taka nai!!!');
        event.target.value = '';
    }

})
// withdraw button add event listener
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get withdraw new amount
    const newWithdrawAmount = getInputValueById('withdraw-field')
    // check valid withdraw input field
    if (!newWithdrawAmount) {
        return;
    }

    // get previous withdraw amount
    const previousWithdrawAmount = getTextElementValueById('total-withdraw');

    // get previous balance
    let previousBalanceAmount = getTextElementValueById('total-balance');

    const currentWithdraw = newWithdrawAmount + previousWithdrawAmount;
    setTextElementValueById('total-withdraw', currentWithdraw)
    
    // total balance calculate
    const currentBalance = previousBalanceAmount - newWithdrawAmount;
    setTextElementValueById('total-balance', currentBalance);
})