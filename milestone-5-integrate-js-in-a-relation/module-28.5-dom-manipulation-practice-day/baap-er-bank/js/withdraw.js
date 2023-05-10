document.getElementById('btn-withdraw').addEventListener('click', function () {
    // set withdraw
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdraw = getElementValueById('withdraw-amount');
    const totalWithdraw = newWithdrawAmount + previousWithdraw;
    setElementValueById('withdraw-amount', totalWithdraw);

    // set balance
    const previousBalance = getElementValueById('balance-amount');
    const newBalance = previousBalance - newWithdrawAmount;
    setElementValueById('balance-amount', newBalance);
})