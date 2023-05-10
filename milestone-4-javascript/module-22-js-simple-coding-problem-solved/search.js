const lyrics = 'this is Naim';
const searchString = 'naim';
const doseExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doseExist);

console.log(lyrics.indexOf('Naim'));

console.log(lyrics.startsWith('thiss'));
console.log(lyrics.endsWith(''));

const fileName = 'app.js                 ';
console.log(fileName.trim().endsWith('.js'));