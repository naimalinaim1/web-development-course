const clearLocalStorage = () => {
  localStorage.clear();
};

const setName = () => {
  localStorage.setItem("name", "Sakib Khan");
};

const setAge = () => {
  localStorage.setItem("age", 40);
};

const removeItems = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("age");
};

const names = { firstName: "Abraham", lastName: "Linkon" };
localStorage.setItem('names', JSON.stringify(names));