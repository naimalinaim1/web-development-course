// object
const obj1 = { name: "obj1", prototype: "is true" }; // object literal
obj1.age = "older version";
// console.log(obj1);

function MakeObj(name, prototype) {
  this.name = name;
  this.prototype = prototype;
}

const obj2 = new MakeObj("make object", "is boolean");
MakeObj.prototype.use = "useable";
// console.log(obj2.use)

class MakeObj2 {
  #name;
  #model;
  year;
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
  getPri() {
    return this.name + " " + this.model;
  }
}
const obj3 = new MakeObj2("Make Object", "poran model", "old version");
const getPrivetValue = obj3.getPri();
// console.log(obj3.name);
// console.log(obj3.model);
// console.log(obj3.year);

const newObj = Object.create(null);
newObj.name = "New object";
newObj.age = "old old version";
// console.log(newObj);
// console.log(newObj.name);
// console.log(newObj.age);

const person1 = {
  name: "Person 1",
  money: 7800,
  exam: function () {
    return this.name + " " + "exam is coming in next month";
  },
  cost: function (money) {
    this.exam();
    this.money = this.money - money;
    return this.money;
  },
};

const comingExam = person1.exam();
const firstCost = person1.cost(1700);
// console.log(comingExam);
// console.log(firstCost);

const data = {
  name: "known",
  age: 18,
  isGirlFriend: true,
  keyboard: 2,
  monitor: 1,
  etc: 2,
};
const keys = Object.keys(data);
const values = Object.values(data);
const pair = Object.entries(data);

// console.log(keys);
// console.log(values);
// console.log(pair);

for (const key in data) {
  // console.log(data[key]);
}

for (const [key, value] of Object.entries(data)) {
  // console.log(key, value);
}

const data1 = {
  option: "option",
  name: "data",
};

const data2 = {
  name: "data",
  option: "option",
};

const data3 = {
  name: "data 3",
  option: "option 3",
  other: "other 3",
};

// Object.seal(data3);
Object.freeze(data3);
delete data3.name;
data3.name = "change data name";
// console.log(data3);

const data1String = JSON.stringify(data1);
const data2String = JSON.stringify(data2);
// if (data1String == data2String) {
//   console.log(true);
// } else {
//   console.log(false);
// }
const compareObject = (first, second) => {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length == secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// const isEqual = compareObject(data1, data2);
// console.log(isEqual);

const compareObject2 = (first, second) => {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// const isEqual2 = compareObject2(data1, data2);
// console.log(isEqual2);

const borrow1 = {
  firstName: "naim",
  lastName: "ali",
  money: 5000,
  fullName: function (job, experience) {
    return `${this.firstName} ${this.lastName} ${job} ${experience}`;
  },
};

const borrow2 = {
  firstName: "alamin",
  lastName: "islam",
};

// const fullName = borrow1.fullName('learning', 2);
// console.log(fullName);
const fullName = borrow1.fullName.call(borrow2, "fighter", 0);
const fullName1 = borrow1.fullName.apply(borrow2, ["..gtw", 0]);
const fullName2 = borrow1.fullName.bind(borrow2);
const getName = fullName2('no job', 0);
// console.log(fullName);
// console.log(fullName1);
// console.log(getName);
