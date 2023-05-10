// load cocktail api
const loadCocktail = (cocktail) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCocktail(data.drinks))
    .catch((e) => console.log(e));
};

const displayCocktail = (cocktails) => {
  const container = document.getElementById("container");
  container.innerHTML = '';
  cocktails.forEach((cocktail) => {
    const div = document.createElement('div');
    div.innerHTML = `
        <h3>${cocktail.strDrink}</h3>
        <img src="${cocktail.strDrinkThumb}">
    `;
    container.appendChild(div);
    console.log(cocktail);
  });
};

// search cocktail
const searchCocktail = () => {
    const searchText = document.getElementById('search-cocktail-field').value;
    loadCocktail(searchText);
}

loadCocktail("margarita");
