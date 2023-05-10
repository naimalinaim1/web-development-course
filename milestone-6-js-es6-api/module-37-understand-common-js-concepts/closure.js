// closure
function kitchen () {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}
const firstServer1 = kitchen();
const firstServer2 = kitchen();
const firstServer3 = kitchen();
console.log(firstServer1())
console.log(firstServer1())
console.log(firstServer1())
console.log(firstServer2())
console.log(firstServer2())
console.log(firstServer2())
console.log(firstServer3())
console.log(firstServer3())