const first = { a: 2, b: 3, c: 4 };
const second = { a: 2, b: 3, c: 4 };
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// const isEqual = first === second ? "they are same" : "different";
// console.log(isEqual);
// if (firstString === secondString) {
//   console.log("they are same");
// } else {
//   console.log("different");
// }

// object compare
const compareObject = (first, second) => {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(first);
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

const isSame = compareObject(first, second);
console.log(isSame);
