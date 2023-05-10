// utilities
const layout = {
    color: {
        lightBlue: 'lightblue',
    },
    background: {
        tomato: 'tomato',
        pink: 'pink',
    }
}

// select all h2 and change color lightblue
const allH2 = document.getElementsByTagName('h2');
for (const h2 of allH2) {
    h2.style.color = layout.color.lightBlue;
}


// backpack section
const backPackSection = document.getElementById('backpack');
backPackSection.style.background = layout.background.tomato;
backPackSection.style.padding = '10px';
backPackSection.style.borderRadius = '10px';


// card section
const cardSection = document.getElementsByClassName('card');
for (const card of cardSection) {
    card.style.borderRadius = '30px';
}


// add onclick
function btnClicked() {
    console.log('btn is clicked')
}

// click button and delete this button
const allButton = document.getElementsByClassName('btn');
for (const button of allButton) {
    button.addEventListener('click', function (event) {
        // event.target.parentNode.removeChild(event.target)
        // console.log(event.target.parentNode)
        // console.log(event.target.parentNode.parentNode)
        // console.log(event.target.parentNode.parentNode.parentNode)
        // event.target.parentNode.parentNode.parentNode.style.display = 'none';
        event.preventDefault();
        // event.target.innerText.toLowerCase() !== 'submit'.toLowerCase()
        if (!button.getAttribute('type')) {
            event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        }
    })
}

// email submit button

const submitBtn = document.getElementById('submit');
document.getElementById('email-field').addEventListener('keyup', function (event) {
    const inputText = event.target.value;
    if (inputText.toLowerCase() === 'email'.toLowerCase()) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', true)
    }
})

// subscribe section background change 
const subscribeSection = document.getElementById('subscribe');
subscribeSection.addEventListener('dblclick', function () {
    subscribeSection.style.background = layout.background.pink;
})