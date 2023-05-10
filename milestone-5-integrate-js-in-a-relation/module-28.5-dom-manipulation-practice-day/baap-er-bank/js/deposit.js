document.getElementById('btn-deposit').addEventListener('click', function () {
    // set deposit
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDeposit = getElementValueById('deposit-amount');
    const totalDeposit = newDepositAmount + previousDeposit;
    setElementValueById('deposit-amount', totalDeposit);

    // set balance
    const previousBalance = getElementValueById('balance-amount');
    const totalBalance = previousBalance + newDepositAmount;
    setElementValueById('balance-amount', totalBalance);
});