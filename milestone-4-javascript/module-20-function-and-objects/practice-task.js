/** practice task 1 */
function foo() {
    console.log('foo');
    bar();
}

function bar() {
    console.log('bar');
}
foo();


/** practice task 2 */
function make_avg(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    const average = sum / 3;
    return average;
}
const average = make_avg(1,2,3);
console.log('average', average);


/** practice task 3 */
function array_avg(params) {
    var arrayLength = params.length;
    var arraySum = 0;
    for (let i = 0; i < arrayLength; i++) {
        var element = params[i];
        arraySum += element;
    }
    var arrayAverage = arraySum / arrayLength;
    return arrayAverage;
}

var arrAvg = array_avg([1, 2, 3, 4]);
console.log('array average', arrAvg);

var averArr = [1, 2, 3, 4].reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(averArr);

/** practice task 4 */
// has return & has parameter 
function odd_even(params) {
    if (params == 0) {
        return 'zero';
    } else if (params%2 == 0) {
        return  'even';
    } else {
        return 'odd';
    }
}
var checkNumber = odd_even(0);
console.log(checkNumber);
var checkNumber = odd_even(1);
console.log(checkNumber);
var checkNumber = odd_even(2);
console.log(checkNumber);

console.log('');

// no return & has parameter 
function odd_even2(params) {
    if (params == 0) {
        console.log('zero');
    } else if (params%2 == 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}
odd_even2(0);
odd_even2(1);
odd_even2(2);
console.log()

// practice 5
var signal = 'yellow';
switch (signal) {
    case 'red':
        console.log('danger! no walk');
        break;
    case 'yellow':
        console.log('ready! to walk');
        break;
    case 'green':
        console.log('start! walk');
        break;
    default:
        console.log('no color signal');
}
