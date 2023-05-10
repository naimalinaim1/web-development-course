const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function() {
        return this.name + ' is participating in an exam';
    },
    improveExam : function (subject) {
        const output = this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`;
    },
    treatDey: function (amount) {
        this.money = this.money - amount;
        return this.money;
    }
}

const output = student.exam();
console.log(output);

const reExam = student.improveExam('Algebra');
console.log(reExam);

const remaining = student.treatDey(900);
console.log(remaining);

const dolaRemaining = student.treatDey(500);
console.log(dolaRemaining);
