const numbers = [1, 2, 3, 4, 5];
const searchPartial = numbers.filter(n => n / 2 > 1);
console.log(searchPartial);

const firstSearch = numbers.find(n => n / 2 > 1);
console.log(firstSearch);