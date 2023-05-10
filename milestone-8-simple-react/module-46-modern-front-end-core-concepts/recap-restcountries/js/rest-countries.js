const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

const getCountryHTML = ({name, flags}) => {
  return `
        <div class="country">
            <h3>${name?.common}</h3>
            <img src="${flags.png}" loading="lazy">
        </div>
    `;
};

loadCountries();
