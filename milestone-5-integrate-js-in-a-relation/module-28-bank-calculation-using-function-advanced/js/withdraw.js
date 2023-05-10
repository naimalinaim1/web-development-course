document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-amount');
    const totalWithdraw = newWithdrawAmount + previousWithdrawTotal;
    setTextElementValueById('withdraw-amount', totalWithdraw);
    const previousBalance = getTextElementValueById('balance-amount');
    const newBalance = previousBalance - newWithdrawAmount;
    setTextElementValueById('balance-amount', newBalance);
})