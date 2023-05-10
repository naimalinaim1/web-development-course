function getOddNumSum(array) {
    const type = typeof array;
    const oddNum = [];
    if (type == 'object') {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element % 2 !== 0) {
                oddNum.push(element);
            }
        }
        const oddNumSum = oddNum.reduce((p,c) => p+c,0);
        return oddNumSum;

    }
    return 'Please provide an array';
}

const array = [1, 2, 3, 4, 5];
const oddNumSum = getOddNumSum(array);
console.log(oddNumSum);