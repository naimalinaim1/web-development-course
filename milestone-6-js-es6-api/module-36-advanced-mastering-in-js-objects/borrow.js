const kodomAli = {
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
const result = kodomAli.exam();
// console.log(result);

const badamAli = {
    name: 'kacha badam',
    money: 8000,
}

const result2 = kodomAli.exam.call(badamAli);
console.log(result2);

const badamMoney = kodomAli.treatDey.call(badamAli, 450);
console.log(badamMoney);

const badamMoney2 = kodomAli.treatDey.apply(badamAli, [590, 110]);
console.log(badamMoney2);

const badamMoney3 = kodomAli.treatDey.bind(badamAli);
const remaining = badamMoney3(100, 10);
console.log(remaining)
const remaining2 = badamMoney3(100, 10);
console.log(remaining2)