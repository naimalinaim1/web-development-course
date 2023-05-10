// Define variables for calculator elements
const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.calculator-button');

// Define variables for calculator values
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = null;

// Add event listeners to calculator buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      if (operator === '') {
        firstOperand += button.textContent;
        display.textContent = firstOperand;
      } else {
        secondOperand += button.textContent;
        display.textContent = secondOperand;
      }
    } else if (button.classList.contains('operator')) {
      operator = button.textContent;
    } else if (button.classList.contains('clear')) {
      firstOperand = '';
      secondOperand = '';
      operator = '';
      result = null;
      display.textContent = '0';
    } else if (button.classList.contains('equal')) {
      if (operator === '+') {
        result = Number(firstOperand) + Number(secondOperand);
      } else if (operator === '-') {
        result = Number(firstOperand) - Number(secondOperand);
      } else if (operator === '*') {
        result = Number(firstOperand) * Number(secondOperand);
      } else if (operator === '/') {
        result = Number(firstOperand) / Number(secondOperand);
      }
      firstOperand = '';
      secondOperand = '';
      operator = '';
      display.textContent = result;
    }
  });
});
