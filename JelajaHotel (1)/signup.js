
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (localStorage.getItem(email) !== null) {
        alert('Email sudah terdaftar! Silahkan masuk atau gunakan email lain.');
    } else {
        localStorage.setItem(email, password);
        alert('Akun berhasil dibuat! Silahkan masuk.');
        window.location.href = 'signin.html';
    }
});