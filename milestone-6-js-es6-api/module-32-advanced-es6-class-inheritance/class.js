// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;
    constructor (name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession (time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz (module) {
        console.log(`please create quiz for module ${module}`);
    }
}

const ammir = new Instructor('ammi', 'kochukhat');
console.log(ammir);
ammir.startSupportSession('9.00');
ammir.createQuiz(45);

const solaiman = new Instructor('Solaiman', 'nilkhat');
console.log(solaiman);