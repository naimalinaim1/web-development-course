// load phone using api
const loadPhone = async (searchPhone, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
};

// display phone
const displayPhones = (phones, dataLimit) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";

  const showAll = document.getElementById("show-all");
  if (dataLimit && phones.length > 12) {
    phones = phones.slice(0, 12);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
  // display no phone message
  const noPhone = document.getElementById("phone-not-found");
  if (phones.length === 0) {
    noPhone.classList.remove("d-none");
  } else {
    noPhone.classList.add("d-none");
  }
  // display 12 phone only
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
        <div class="card h-120 p-4">
            <img src="${phone.image}" class="card-img-top" alt="phone" />
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
            </p>
            <button onclick="loadPhoneDetails('${phone.slug}');" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Details</button>
            </div>
        </div>`;
    phoneContainer.appendChild(phoneDiv);
  });
  toggleSpinner(false);
};


// load phone details
const loadPhoneDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
};

const displayPhoneDetails = phone => {
  document.getElementById('phoneDetailsModalLabel').innerText = phone.name;
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
    <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found </p>'}</p>
    <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information Found'}</p>
    <p>Other: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information Found'}</p>
    <p>Sensor: ${phone.mainFeatures?.sensors ? phone.mainFeatures.sensors[0] : 'no sensor'}</p>
  `;
}
const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

const processSearch = (dataLimit) => {
  toggleSpinner(true);
  let searchPhone = document.getElementById("search-phone-field").value;
  if(searchPhone === '') {
    searchPhone = 'phone';
  }
  loadPhone(searchPhone, dataLimit);
};

// search phone
document
  .getElementById("search-phone-btn")
  .addEventListener("click", function () {
    processSearch(12);
  });

document.getElementById('search-phone-field').addEventListener('keyup', function (e) {
  if(e.key === 'Enter'){
    processSearch(12);
  }
})


document.getElementById("btn-show-all").addEventListener("click", function () {
  processSearch();
});

loadPhone("apple", 12);
