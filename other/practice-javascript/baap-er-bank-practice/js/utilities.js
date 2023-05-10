/**
 * 
 * @param {input dom event and this function check is validation number} event 
 */
function checkInput(event) {
    const getKeyCode = event.keyCode;
    if (getKeyCode === 109 || getKeyCode === 69 || getKeyCode === 107) {
        alert('please valid integer number input')
        event.target.value = '';
    }
}

/**
 * 
 * @param { git you input or textarea id and return input field value and convert number} inputId 
 * @returns number
 */
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = Number(inputField.value);
    inputField.value = '';
    if (inputValue <= 0) {
        alert('0 taka is not allowed, please valid integer number input');
        return false;
    }
    return inputValue;
}

/**
 * 
 * @param {give you element id and return element innertext and convert number} elementId 
 * @returns number
 */
function getTextElementValueById(elementId) {
    const getElement = document.getElementById(elementId);
    const elementValue = Number(getElement.innerText);
    return elementValue;
}

/**
 * 
 * @param {give you element id. set this element innerText equal your send value } elementId 
 * @param {} value 
 */
function setTextElementValueById(elementId, value) {
    const getElement = document.getElementById(elementId);
    getElement.innerText = value;
}