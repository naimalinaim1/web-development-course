let serial = 2;
function createMatch () {
    const divContainer = document.querySelector('.all-matches');
    const div = document.createElement('div');
    div.classList.add('match');
    div.innerHTML = `
    <div class="wrapper">
        <button class="lws-delete">
            <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName">Match ${serial++}</h3>
    </div>
    <div class="inc-dec">
        <form class="incrementForm">
            <h4>Increment</h4>
            <input
                type="number"
                name="increment"
                class="lws-increment"
            />
        </form>
        <form class="decrementForm">
            <h4>Decrement</h4>
            <input
                type="number"
                name="decrement"
                class="lws-decrement"
            />   
        </form>
    </div>
    <div class="numbers">
        <h2 class="lws-singleResult"></h2>
    </div>
    `;
    divContainer.appendChild(div);
}

// create add new match
document.querySelector('.lws-addMatch').addEventListener('click', function () {
    createMatch();
})

// delete new match
document.getElementsByClassName('all-matches')[0].addEventListener('click', function (event) {
    const isClose = event.target;
    if(isClose.getAttribute('src')) {
        const deleteElementContainer = event.target.parentNode.parentNode.parentNode.parentNode;
        deleteElementContainer.removeChild(event.target.parentNode.parentNode.parentNode);
    }
})

// change from default behavior
document.getElementsByClassName('all-matches')[0].addEventListener('click', function (event) {
    const targetElement = event.target;
    if (targetElement.getAttribute('type')) {
        event.target.parentNode.addEventListener('keydown', function (event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        })
    }
})
// const allForm = document.getElementsByTagName('form');
// for (const form of allForm) {
//     form.addEventListener('keydown', function(event) {
//         if (event.keyCode == 13) {
//             event.preventDefault();
//         }
//     })
// }



// increment value
const incrementResult = document.getElementsByClassName('lws-singleResult')[0];
// increment button
document.getElementsByClassName('lws-increment')[0].addEventListener('keyup', function (event) {
    const increment = Number(event.target.value);
    const previous = document.getElementsByClassName('lws-singleResult')[0];
    const previousValue = Number(previous.innerText);
    const totalInc = previousValue + increment;
    if (event.keyCode == 13) {
        incrementResult.innerText = totalInc;
        event.target.value = '';
    }
    event.stopImmediatePropagation();
})


// decrement value
const decrementResult = document.getElementsByClassName('lws-singleResult')[0];
// increment button
document.getElementsByClassName('lws-decrement')[0].addEventListener('keyup', function (event) {
    const decrement = Number(event.target.value);
    const previous = document.getElementsByClassName('lws-singleResult')[0];
    const previousValue = Number(previous.innerText);
    const totalDec = previousValue - decrement;
    if (event.keyCode == 13) {
        if (totalDec < 0) {
            decrementResult.innerText = 0;
        } else {
            decrementResult.innerText = totalDec;
        }
        event.target.value = '';
    }
    event.stopImmediatePropagation();
})


// other increment value
document.getElementsByClassName('all-matches')[0].addEventListener('keyup', function (event) {
    const ele = event.target;
    const value = event.target.value;
    if (ele.getAttribute('type') && ele.getAttribute('class') == 'lws-increment') {
        if (event.keyCode == 13) {
            const setValueElement = event.target.parentNode.parentNode.parentNode.lastChild.previousElementSibling.firstChild.nextElementSibling;
            const previousValue = Number(setValueElement.innerText)
            setValueElement.innerText = Number(value) + previousValue;
            event.target.value = '';

        }
    } else {
        if (event.keyCode == 13) {
            const setValueElement = event.target.parentNode.parentNode.parentNode.lastChild.previousElementSibling.firstChild.nextElementSibling;
            const previousValue = Number(setValueElement.innerText)
            const total = previousValue - Number(value);
            if (total < 0) {
                setValueElement.innerText = 0;
            } else {
                setValueElement.innerText = total;
            }
            event.target.value = '';
        }
    }
})

// reset total value
document.getElementsByClassName('lws-reset')[0].addEventListener('click', function (event) {
    const allResult = document.getElementsByClassName('lws-singleResult')
    for (const result of allResult) {
        result.innerText = 0;
    }
})