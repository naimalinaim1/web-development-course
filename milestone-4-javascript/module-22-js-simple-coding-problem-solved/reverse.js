const lyrics = 'this is naim ali';
let reverseString = '';
for (let i = lyrics.length - 1; i >= 0; i--) {
    reverseString += lyrics[i];
}
console.log(reverseString);


let reverseWord = lyrics.split(' ').reverse().join(' ');
console.log(reverseWord);
