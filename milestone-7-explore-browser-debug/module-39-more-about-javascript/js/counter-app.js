const getEle = (id) => document.getElementById(id);

let intervalId = 0;
let i = 1;

// toggle disabled button
const toggleDisabled = (id, isDisabled) => {
  if (isDisabled) {
    getEle(id).classList.add("disabled");
  } else {
    getEle(id).classList.remove("disabled");
  }
};

// default stop and reset button disabled
toggleDisabled("stop-btn", true);
toggleDisabled("reset-btn", true);

// disable button
const disabledBtn = (btn1, btn2, btn3) => {
  const buttonId = ["start-btn", "stop-btn", "reset-btn"];
  btn1 ? toggleDisabled(buttonId[0], true) : toggleDisabled(buttonId[0], false);
  btn2 ? toggleDisabled(buttonId[1], true) : toggleDisabled(buttonId[1], false);
  btn3 ? toggleDisabled(buttonId[2], true) : toggleDisabled(buttonId[2], false);
};
// start button
getEle("start-btn").addEventListener("click", () => {
  disabledBtn(true, false, true);
  const interval = setInterval(() => {
    i++;
    getEle("counter").innerText = i;
  }, 700);
  intervalId = interval;
});

// stop button
getEle("stop-btn").addEventListener("click", () => {
  disabledBtn(false, true, false);
  clearInterval(intervalId);
});

// reset button
getEle("reset-btn").addEventListener("click", () => {
  disabledBtn(false, true, true);
  i = 0;
  getEle("counter").innerText = 1;
});
