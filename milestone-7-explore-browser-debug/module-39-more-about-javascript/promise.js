const getData = new Promise((resolve, reject) => {
  const num = Math.round(Math.random() * 10);
  if (num <= 5) {
    resolve(num);
  } else {
    reject("No data available");
  }
});

// console.log(getData);
// console.log(getData + 9);

// getData.then((data) => console.log(data));
// getData.then((data) => console.log(data + 5));

getData
  .then((data) => console.log(data))
  .catch((e) => console.error("ERR: ", e));
