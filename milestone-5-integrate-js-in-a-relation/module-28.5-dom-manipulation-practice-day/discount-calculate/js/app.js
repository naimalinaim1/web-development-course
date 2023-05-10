function getTextElementValueById (elementId) {
    const element = document.getElementById(elementId);
    return Number(element.innerText);;
}
document.getElementById('discount-field').addEventListener('keyup', function (event) {
    const inputValue = event.target.value;
    const button = document.getElementById('discount-btn');
    if (inputValue.toUpperCase() === 'DISC30'.toUpperCase()) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', true);
    }
})

document.getElementById('discount-btn').addEventListener('click', function () {
    // get price product and discount
    const productPrice = getTextElementValueById('product-price');
    const productDiscount = getTextElementValueById('product-discount');

    const discount = (productPrice / 100) * productDiscount;
    const price = productPrice - discount;

    // set product discount price
    document.getElementById('product-price').innerText = price;

})