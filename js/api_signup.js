// fetch('http://localhost:3000/registration')
//     .then(response => response.json())
//     .then(data => {
//         console.log({
//             data
//         });
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
function postRegFormData(event) {
    event.preventDefault();
}

const signupForm = document.getElementById('signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validasi input (tambahkan validasi lebih lanjut sesuai kebutuhan)
        if (!username || !email || !password) {
            alert('Harap isi semua kolom.');
            return;
        }

        const data = {
            user_name: username,
            email,
            password,
        };

        fetch('http://localhost:3000/registration/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.message.includes('berhasil')) {
                    window.location.href = 'signin.html';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
} else {
    console.error("Elemen dengan ID 'signupForm' tidak ditemukan.");
}

function confirmsignup(signup) {
    var confirmation = confirm('Apakah Anda yakin ingin membuat akun?');
    if (confirmation) {
        alert('Registrasi berhasil! Silahkan klik Login');
        document.getElementById(signup).remove();
    } else {
        alert('Registrasi belum berhasil.');
    }
}


// function postRegFormData(event) {
//     event.preventDefault();
// }

// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     fetch('http://localhost:3000/registration', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert(data.message);
//         if (data.message.includes('berhasil')) {
//             window.location.href = 'signin.html';
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });

// Menghapus baris ini, karena tidak dibutuhkan
// document.querySelector('signupForm').addEventListener('Masuk', postRegFormData);

// document.querySelector('signupForm').addEventListener('Masuk', postRegFormData);
// document.getElementById('signupForm').addEventListener('submit', postRegFormData);
