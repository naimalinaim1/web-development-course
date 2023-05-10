function numbers(startNum, endNum) {
    let numbers = [];
    for(let i = startNum; i <= endNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(numbers(1,50))

function bigFriendName(friends) {
    let bigFriendIndex = 0;
    let bigFriendName = 0;
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length > bigFriendName) {
            bigFriendName = element.length;
            bigFriendIndex = i;
        }
    }
    return friends[bigFriendIndex];
}

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log(bigFriendName(friends));


function removeDuplicate(numbers) {
    let largerNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largerNumber) {
            largerNumber = element;
        }
    }
    console.log(largerNumber);
    return numbers.filter((items, index) => numbers.indexOf(items) === index)
}

const myNumbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(removeDuplicate(myNumbers));