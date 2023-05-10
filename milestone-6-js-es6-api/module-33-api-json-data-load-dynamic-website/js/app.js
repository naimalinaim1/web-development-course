function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadUsers () {
    try {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data));
    } catch (err) {
        console.error(err)
    }
}

function displayData (data) {
    console.log(data);
}