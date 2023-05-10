// get input value using id
function getInputFieldValueById (inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValue = Number(inputField.value);
    inputField.value = '';
    return inputValue;
}

// get text element value using id
function getTextElementValueById (elementId) {
    const getElement = document.getElementById(elementId);
    const elementValue = Number(getElement.innerText);
    return elementValue;
}

// set text element value using id
function setTextElementValueById (elementId, newValue) {
    const getElement = document.getElementById(elementId);
    getElement.innerText = newValue;
}