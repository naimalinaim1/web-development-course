const getLocalStorageNum = () => {
  let num = 0;
  const getNum = localStorage.getItem("count");
  if (getNum) {
    num = getNum;
  }
  return Number(num);
};

const counterCon = document.getElementById("count-number");
const displayCount = () => {
  const previousCount = getLocalStorageNum();
  counterCon.innerText = previousCount;
};
displayCount();

const countNum = () => {
  const previousCount = getLocalStorageNum();
  const currentCount = previousCount + 1;
  counterCon.innerText = currentCount;
  localStorage.setItem("count", currentCount);
};
