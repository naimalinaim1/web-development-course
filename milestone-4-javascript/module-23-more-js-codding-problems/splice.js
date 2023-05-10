const arr_friendsAge = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const partial = arr_friendsAge.splice(2, 7, 5, 7, 5, 7, 5, 7);
console.log(partial);
console.log(arr_friendsAge);