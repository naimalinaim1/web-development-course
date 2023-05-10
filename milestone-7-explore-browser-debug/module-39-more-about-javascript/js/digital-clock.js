// element select by id
const getEle = (id) => document.getElementById(id);
const setEle = (id, value) => (getEle(id).innerText = value);

let hour = 0;
let minute = 0;
let second = 0;

setInterval(() => {
  // second
  if (second < 9) {
    setEle("seconds", "0" + ++second);
  } else {
    setEle("seconds", ++second);
  }

  // minute
  if (second === 59) {
    second = 0;
    if (minute < 9) {
      setEle("minutes", "0" + ++minute);
    } else {
      setEle("minutes", ++minute);
    }
  }

  // hour
  if (minute === 59) {
    minute = 0;
    if (hour < 9) {
      setEle("hours", "0" + ++hour);
    } else {
      setEle("hours", +(++hour));
    }
  }

  // reset hour
  if (hour === 23) {
    hour = 0;
    setEle("hours", hour);
  }
}, 1000);
