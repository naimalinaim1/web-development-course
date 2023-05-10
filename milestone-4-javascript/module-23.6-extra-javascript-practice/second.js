function second (numbers) {
    const firstNum = Math.max(...numbers);
    const firstInx = numbers.indexOf(firstNum);
    
    const lastNum = Math.min(...numbers);
    numbers[firstInx] = lastNum - 1;

    const second = Math.max(...numbers);
    return second;
}

// const array = [11, 2, 3, 4, 5, 6, 7];
// console.log(second(array));