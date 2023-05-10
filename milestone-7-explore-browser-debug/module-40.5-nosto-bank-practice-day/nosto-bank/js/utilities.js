function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = Number(inputFieldValueString);
  inputField.value = "";
  if (inputFieldValue < 0 || !isNaN(inputFieldValue) ) {
    alert('please provide position number');
    return 0;
  }
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = Number(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
