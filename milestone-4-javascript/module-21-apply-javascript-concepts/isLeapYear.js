function isLeapYear(year) {
    if (year % 100 !== 0) {
        var isLeap =  new Date(year,1,29).getDate() === 29;
        return isLeap;
    }
    return false;
}

const yearOne = 2004;
const leapYear = isLeapYear(yearOne);

console.log(yearOne, leapYear);