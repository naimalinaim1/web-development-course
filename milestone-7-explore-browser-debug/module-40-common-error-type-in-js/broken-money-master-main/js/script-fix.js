const calculateExpense = () => {
  const income = document.getElementById("income").value;
  const food = document.getElementById("food").value;
  const rent = document.getElementById("rent").value;
  const clothes = document.getElementById("clothes").value;
  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense = Number(food) + Number(rent) + Number(clothes);

  // calculate balance
  const balance = Number(income) - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
  //   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
    return;
  }
const income = document.getElementById('income').value;
  const savingAmount = (savePercentage / 100) * income;
  
  // calculate remaining balance
  const balance = Number(document.getElementById("balance").innerText);
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = Number(
      savingAmount.toFixed(2)
    );
    document.getElementById("remaining-balance").innerText = Number(
      remainingBalance.toFixed(2)
    );
  }
};
