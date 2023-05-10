function assignmentAverage(ass1, ass2) {
    const totalMarks = ass1 + ass2;
    const average= totalMarks / 2;
    return average;
}
var ass1 = 60;
var ass2 = 58;

var averageMarks = assignmentAverage(ass1, ass2);
console.log('Average marks:', averageMarks);