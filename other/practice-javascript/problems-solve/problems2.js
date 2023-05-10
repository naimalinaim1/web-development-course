function secondLargestNumber(numbers) {
    let firstLargest = numbers[0];
    let lastLargest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const sln_element = numbers[i];
        if (sln_element > firstLargest) {
            firstLargest = sln_element;
        }
        if (sln_element < lastLargest) {
            lastLargest = sln_element;
        }
    }
    const sln_firstLargestIndex = numbers.indexOf(firstLargest);
    numbers[sln_firstLargestIndex] = lastLargest - 1;

    let secondLargest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const sln_element = numbers[i];
        if (sln_element > secondLargest) {
            secondLargest = sln_element;
        }
    }
    return secondLargest;
}

const sln_numbers = [11, 2, 3, 4, 5, 8,99]
const sln_secondLargest = secondLargestNumber(sln_numbers);
console.log(sln_secondLargest);