
function getElementById (elementId) {
    const element = document.getElementById(elementId);
    return element;
}
function getElementValueById (elementId) {
    const value = document.getElementById(elementId).innerText;
    return Number(value);
}
function setElementValueById (elementId, value) {
    const element = getElementById(elementId);
    element.innerText = value;
}
function getInputValueById (inputId) {
    const value = getElementById(inputId).value;
    getElementById(inputId).value = '';
    return Number(value);
}

function costCalculate(priceId, inputId, setValueId) {
    const perPrice = getElementValueById(priceId);
    const quantity = getInputValueById(inputId);
    const totalCost = perPrice * quantity;
    setElementValueById(setValueId, totalCost);

    const previousTotal = getElementValueById('total');
    const total = previousTotal + totalCost;
    setElementValueById('total', total);
    setElementValueById('valentine-budget', total);
}


// calculate
function handleKitkat() {
    costCalculate('kitkat-price', 'kitkat-quantity', 'chocolate')
}

// rose calculate
getElementById('rose-buy-btn').addEventListener('click', function () {
    costCalculate('rose-price', 'rose-quantity', 'rose')
})

// dairy calculate
getElementById('diary-buy-btn').addEventListener('click', function () {
    costCalculate('diary-price', 'diary-quantity', 'diary')
})

// discount
function handlePromoCode() {
    const promoCode = getInputValueById('promo-code');
    if (promoCode === 101) {
        const totalCost = getElementValueById('total');
        const discount = totalCost * 0.1;
        const cost = totalCost - discount;
        setElementValueById('all-total', cost);
        setElementValueById('valentine-budget', cost);
    } else {
        alert('Promo cod not match');
    }

}
