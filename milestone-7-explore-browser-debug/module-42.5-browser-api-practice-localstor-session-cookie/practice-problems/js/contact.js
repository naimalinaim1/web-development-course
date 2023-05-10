const getStorage = () => {
  let contact = {};
  try {
    const getContactFromLocalStorage = localStorage.getItem("contact");
    if (getContactFromLocalStorage) {
      contact = JSON.parse(getContactFromLocalStorage);
    }
  } catch (e) {
    console.log(e);
  }
  return contact;
};

const addOrDelete = (inputId, option) => {
  let contact = getStorage();
  const value = document.getElementById(inputId).value;
  if (option === "send") {
    contact[inputId] = value;
  } else if (option === "delete") {
    setValue(inputId, '');
    delete contact[inputId];
  }
  localStorage.setItem("contact", JSON.stringify(contact));
};

const resetAll = () => {
  try {
    localStorage.removeItem("contact");
  } catch (e) {
    console.log(e);
  }
  const allInput = document.querySelectorAll("#contact input");
  for (const input of allInput) {
    input.value = "";
  }
  document.querySelector("#contact textarea").value = "";
};

const setValue = (id, value) => {
  document.getElementById(id).value = value;
};
const displayStorageValue = () => {
  try {
    const { name, email, message } = getStorage();
    setValue("name", name ? name : "");
    setValue("email", email ? email : "");
    setValue("message", message ? message : "");
  } catch (e) {
    console.log(e);
  }
};

const sendAll = () => {
  addOrDelete("name", "send");
  addOrDelete("email", "send");
  addOrDelete("message", "send");
};

displayStorageValue();
