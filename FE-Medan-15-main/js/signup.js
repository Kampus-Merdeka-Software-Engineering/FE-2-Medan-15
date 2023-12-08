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

// Menambahkan pengecekan apakah elemen dengan ID 'signupForm' ada sebelum menambahkan event listener
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const data = {
            user_name: username,
            email,
            password
          }

          console.log(data)
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
    console.error("Element with ID 'signupForm' not found.");
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