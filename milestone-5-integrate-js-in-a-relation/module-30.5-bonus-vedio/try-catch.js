const ly = 'naim';
console.log(ly);
console.log(25)
console.log(100)

try {
    console.log('inside try');
    // console.log(district);
    // const district = 'dhaka';
    console.log('after error')
}
catch (error) {
    console.log('inside catch');
    // console.log(error);
}
finally {
    console.log('finally done')
}
console.log('last line code');

try {
    const num = 123;
    console.log(num.toLowerCase())
} catch (ex) {
    console.log('I am num');
    // console.log(ex);
}

try {
    console.log('try block');
} finally {
    console.log('finally block');
}