const data = {
  id: 100,
  name: "Naim Ali",
  info: {
    id: 58826,
    name: "alamin islam",
    learn: ["HTML", "CSS", "JAVASCRIPT"],
  },
  allLearn: ["HTML", "CSS", "BOOTSTRAP", "TAILWIND CSS", "JAVASCRIPT"],
  lastLearn: function () {
    const learn = this.info.learn;
    return learn[learn.length - 1];
  },
};

// console.log(data.lastLearn())

const details = `INFO-ID: ${data.info.id}, NAME: ${data.name}, SECOND-LEARN: ${data.allLearn[1]}`;
// console.log(details);

const first = () => 89;
const getFirst = first();
// console.log(getFirst)

const second = (num) => num / 17;
const getSecond = second(40);
// console.log(getSecond);

const third = (num1, num2) => (num1 + num2) / 2;
const getThird = third(12, 21);
// console.log(getThird);

const fourth = (first, second) => {
  first += 7;
  second += 7;
  return first + second;
};
const getFourth = fourth(1, 2);
// console.log(getFourth);

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mapNum1 = num1.map((num) => num / 7);
// console.log(mapNum1)
/**
 * map: array er all element er above some work and return
 * forEach: array er all element er above some work and no return
 * filter: filter inside condition true return all match  element
 * find: find inside condition tru return one first match element
 */
const { id, name } = data;
const [firstEl, balance] = data.allLearn;
// console.log(firstEl, balance)
