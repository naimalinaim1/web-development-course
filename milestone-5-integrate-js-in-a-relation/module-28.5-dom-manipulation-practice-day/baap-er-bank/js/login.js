const userInfo = {
    login: {
        email: 'sontan@baap.com',
        password: 'secret',
    }
}
// login
document.getElementById('btn-submit').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // redirect bank dashboard
    if (userInfo.login.email === email && userInfo.login.password === password) {
        window.location.href = 'bank.html';
    } else {
        alert('Email or Password not match');
    }
})