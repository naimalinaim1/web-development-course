const student = {
    id: 101,
    name: 'babule',
    marks: {
        math: 79,
        phisic: 89,
        chemistry: 65
    }
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
console.log(chemistry);

const subject = 'math';
const markSubject = student.marks[subject];
console.log(markSubject);