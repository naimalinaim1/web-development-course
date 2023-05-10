const listItems = document.querySelectorAll('li');
const title = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND', 'JS'];
let titleIndex = 0;
for (const listItem of listItems) {
    listItem.classList.add('text-center')
    listItem.style.color = 'lightgray';
    listItem.style.backgroundColor = 'black';
    listItem.style.padding = '10px';
    listItem.style.borderRadius = '5px';
    listItem.style.marginTop = '5px';
    listItem.setAttribute('title', title[titleIndex++]);

}

const ul = document.getElementsByClassName('list-items')[0];
ul.classList.remove('text-large');

const mainCon = document.getElementById('main-container');