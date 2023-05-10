function convertToDollar (tk) {
    if (typeof tk === 'number') {
        return tk * 84;
    } else {
        throw Error ('please give number');
    }
}
try {
    const dollar = convertToDollar('five');
    console.log(dollar);
} catch (err) {
    console.log(err.name)
    console.log(err.message)
}
console.log('I am end');