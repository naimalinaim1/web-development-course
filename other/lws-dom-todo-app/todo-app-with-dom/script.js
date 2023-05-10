const newTask = document.getElementById("new-task");
const from = document.getElementById("new-task-container");
const todoUl = document.getElementById("items");
const completeList = document.querySelector(".complete-list ul");

const addTask = (event) => {
  event.preventDefault();
  if (newTask.value === "") {
    return;
  }
  createTask(newTask.value);
  newTask.value = "";
};

const createTask = (todo) => {
  const li = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");

  label.innerText = todo;
  checkBox.type = "checkbox";
  li.classList.add("item");

  li.appendChild(checkBox);
  li.appendChild(label);
  todoUl.appendChild(li);
};

const inCompleteTodo = (event) => {
  const target = event.target;
  if (target.getAttribute("type") === "checkbox") {
    const parent = target.nextSibling;
    completeTodo(parent);
    target.parentNode.parentNode.removeChild(target.parentNode);
  }
};

const completeTodo = (todo) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.classList.add("item");
  btn.classList.add("delete");
  btn.innerText = "Delete";

  li.innerHTML = todo.innerText;
  li.appendChild(btn);
  completeList.appendChild(li);
};

const deleteTodo = (event) => {
  const target = event.target;
  if (target.getAttribute("class") === "delete") {
    target.parentNode.parentNode.removeChild(target.parentNode);
  }
};

completeList.addEventListener("click", deleteTodo);

todoUl.addEventListener("click", inCompleteTodo);

from.addEventListener("submit", addTask);
