function loadUsers2() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData2(data));
}
function displayData2(data) {
    const userList = document.getElementById('users-list');
  for (const user of data) {
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  }
}
