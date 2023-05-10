// user information
const users = {
    email: 'sontan@baap.com',
    password: 'secret',
}
// select login button and add event listener
document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const email = emailField.value;
    const password = passwordField.value;

    // check valid users
    if (email === users.email && password === users.password) {
        window.location.href = 'bank.html';
    } else {
        alert('toke ami taijjo korlam, tui password vula geshos');
    }
});