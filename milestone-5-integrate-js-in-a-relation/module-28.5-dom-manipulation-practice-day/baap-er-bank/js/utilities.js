function getInputValueById (inputId) {
    const element = document.getElementById(inputId);
    const value = Number(element.value);
    element.value = '';
    return value;
}
function getElementValueById (elementId) {
    const element = document.getElementById(elementId);
    const value = Number(element.innerText);
    return value;
}
function setElementValueById (elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
