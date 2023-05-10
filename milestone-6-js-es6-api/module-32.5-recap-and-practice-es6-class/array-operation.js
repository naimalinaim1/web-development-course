const numbers = [1, 2, 3, 4, 5];
const fiveTimes = numbers.map(num => num * 5);
console.log(fiveTimes);

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = allNumbers.filter(num => num % 2);
console.log(oddNumbers);

const data = [
    {id: 1, name: 'keyboard', price: 2500},
    {id: 2, name: 'mouse', price: 900},
    {id: 3, name: 'monitor', price: 5000},
    {id: 4, name: 'printer', price: 25200},
    {id: 5, name: 'phone', price: 5000},
];
const searchData = data.find(d => d.price == 5000);
console.log(searchData);

/**
 * summary: map, forEach, filter, find
 * 1. map
 *   Des: this array method array all element er opora a event apply core. and this array return a new array. main array not modify.
 * 2. forEach
 *   Des: this array method apply array all element and no return value
 * 3. filter
 *   Des: this array method apply array all element and return inside condition is true return this element and return new array.
 * 4. find
 *   Des: same filter. but return value is not array. and return one value is the inside condition.
 * 
 */

const obj = {
    objName: 'obj name',
    objAuthor: 'obj author',
    objDescription: 'obj description'
}

const {objName, objAuthor} = obj;
console.log(objName);

const [first, second, three] = numbers;
console.log(three);

const threeParameter = (num1, num2, num3 = 7) => num1 + num2 + num3;
console.log(threeParameter(2, 3));

const myData = {
    id: 1,
    title: 'Product',
    products: {
        product1: ['product1', 10000],
        product2: ['product2', 20000],
        product3: ['product3', 29000],
        product4: ['product4', 36000],
    }

}
const product = myData.products?.product1;
console.log(product)