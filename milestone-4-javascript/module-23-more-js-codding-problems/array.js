const bg_country = 'Bangladesh';
const bg_age = 52;
const bg_isIndependent = true;
const ts_student = {id: 121, class: 11, name: 'Agun'}
const ts_friends = [12, 15, 16, 14, 12, 13];
function ts_add(ip_num1, ip_num2) {
    return ip_num1 + ip_num2;
}

console.log(typeof bg_country);
console.log(typeof bg_age);
console.log(typeof bg_isIndependent);
console.log(typeof ts_student);
console.log(Array.isArray(ts_friends));
console.log(typeof ts_add);

console.log(ts_friends.includes(10))
console.log(ts_friends.includes(12))

if (ts_friends.indexOf(13 !== -1)) {
    console.log('has');
}

// concat: 
const ts_newFriends = [10, 18, 17, 20];
const ts_allFriends = ts_newFriends.concat(ts_friends);
console.log(ts_allFriends);

