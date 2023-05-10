// element selector
const pElementSelectorUsingTagName = document.getElementsByTagName('p');
// console.log(pElementSelectorUsingTagName);
// console.log(pElementSelectorUsingTagName.length);
// console.log(pElementSelectorUsingTagName[0]);
// console.log(pElementSelectorUsingTagName[0].innerText);

for (const allPElementText of pElementSelectorUsingTagName) {
    // console.log(allPElementText.innerText)
}


// class selector
const classSelectors = document.getElementsByClassName('about-items');
// console.log(classSelectors);
for (const classSelector of classSelectors) {
    classSelector.style.backgroundColor = 'skyblue';
    classSelector.style.padding = '10px';
    classSelector.style.borderRadius = '10px';
}

const idSelector = document.getElementById('section-title');
idSelector.style.color = 'lightblue';

const sectionTitles = document.querySelectorAll('section .section-title');
for (const sectionTitle of sectionTitles) {
    sectionTitle.style.color = 'lightblue';
}

// console.log(idSelector.getAttribute('class'))
idSelector.setAttribute('title', 'section title here')
// console.log(idSelector.getAttribute('title'))

idSelector.innerText += '';
idSelector.innerHTML = `
    ABOUT INFORMATION
`;

const serviceItems = document.getElementsByClassName('service-items');
for (const serviceItem of serviceItems) {
    serviceItem.classList.add('service-bg');
    // serviceItem.classList.remove('service-bg');
}

const oneServiceItems = document.getElementsByClassName('service-items')[0];
// console.log(oneServiceItems.childNodes)
// console.log(oneServiceItems.children)
// console.log(oneServiceItems.nodeName)
// console.log(oneServiceItems.firstChild)
// console.log(oneServiceItems.lastChild)
// console.log(oneServiceItems.parentNode)
// console.log(oneServiceItems.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
// console.log(oneServiceItems.parentElement);

// create node and elements

const mainContainer = document.getElementsByClassName('main-container')[0];

const createFooter = document.createElement('footer');
createFooter.innerHTML = `
    <p style='margin: 0; padding: 25px 0; text-align: center; color: skyblue; background: #212121; margin-top:80px'><small>Copyright &copy 2023. all right reserve</small></p>
`;

mainContainer.appendChild(createFooter);
