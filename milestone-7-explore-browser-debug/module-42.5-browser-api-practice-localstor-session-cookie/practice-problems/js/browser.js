const numberCal = () => {
  const inputNum = prompt("Please give me a number");
  if (!isNaN(inputNum) && inputNum) {
    const calc = Number(inputNum) + 200;
    alert(calc);
  } else {
    const reRun = confirm("Opps! inpt a number \n you try again");
    if (reRun === true) {
      numberCal();
    }
  }
};

const displayLink = () => {
  const isConfirm = confirm("You want to show website location");
  if (isConfirm === true) {
    console.log(location.href);
  }
};

/**
 * COOKIES
 * HTTp cookies are small blocks of data create by a web serve while a user is browsing a website and place on the user's computer of other device by the user's web browser. Cookies are placed on the device used to access a website and more than one cookie may be placed on a user' device during a section.
 */

/**
 * localStorage vs sessionStorage
 * The difference is that while data in localStorage does'nt expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded ina particular tab in the browser, a unique page session gets created and assigned to that particular tab.
 */
