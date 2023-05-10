const lyrics = 'In publishing and graphic design. Lorem ipsum is a placeholder text. It commonly used to demonstrate the visual. Form of a document or a typeface without. Relying on meaningful content';
const words = lyrics.split(' ');
// console.log(words);
const sentences = lyrics.split('.');
// console.log(sentences);\

const char = lyrics.split('');
// console.log(char);

const partial = lyrics.slice(0, 5);
console.log(partial);

const partial2 = lyrics.substring(0, 5);
console.log(partial2);

const cont = partial.concat(', ', partial2);
console.log(cont);

const arr = ['I', 'Am', 'Naim'];
console.log(arr.reverse().join(''));

console.log('naim ali is my name'.substr(5, 6))