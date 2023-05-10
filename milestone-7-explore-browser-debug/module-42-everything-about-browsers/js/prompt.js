const showAlert = () => {
  alert("Warning: you are click!!!!");
};

const leanMoney = () => {
  const isConfirm = confirm("taka dhar dibi");
  if (isConfirm === true) {
    alert("tui amar janer dosto");
  } else {
    console.log("DGM ......");
  }
};

const getInfo = () => {
  const name = prompt("Tell me your name", "Naim");
  if (name === null) {
    alert("your name de...");
  } else {
    console.log(name, "welcome to world?");
  }
};
