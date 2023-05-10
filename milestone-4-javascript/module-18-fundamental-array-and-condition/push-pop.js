var numbers = [1,2,3,4];
numbers.push(5, 6, 7);

console.log(numbers)


var friends = ['Dalia', 'Galia', 'Kalia'];

var element = friends.pop();
console.log(friends);
console.log(element)

var fruits = ['Mango', 'Orange', 'Apple'];
fruits.unshift('Banana');

console.log(fruits);

var element = fruits.shift();
console.log(fruits);


var lear = ['html', 'js running'];
lear.splice(1, 0, 'css', 'bootstrap', 'tailwind');
console.log(lear);
