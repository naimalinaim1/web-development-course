const users = {
    email: 'sontan@baap.com',
    password: 'secret',
}
// login button select and  eventlistener add
document.getElementById('btn-submit').addEventListener('click', function () {
    // get email and password
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    // check valid users
    if (users.email === email && users.password === password) {
        window.location.href = './bank.html';
    } else {
        alert('invalid email or password');
    }
})