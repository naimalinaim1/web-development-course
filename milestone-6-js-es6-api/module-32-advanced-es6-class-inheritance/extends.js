class TeamMember {
    name;
    location;
    constructor (name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback () {
        console.log(`${this.name} thanks you for your feedback`);
    }
}
class Instructor extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web Team';
    constructor (name, location) {
        super(name, location);
    }
    startSupportSession (time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz (module) {
        console.log(`please create quiz for module ${module}`);
    }

}

class Developer extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web Team';
    tech;

    constructor (name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developerFeature (feature) {
        console.log(`Please develop the ${feature}`);
    }
    release (version) {
        console.log(`Please release the version ${version}`);
    }
    provideFeedback () {
        console.log(`${this.name} thanks you for your feedback`);
    }
}

const dalia = new Developer('dalia khatun', 'down', 'React');
console.groupCollapsed(dalia);
dalia.provideFeedback();