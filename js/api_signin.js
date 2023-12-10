function postRegFormData(event) {
    event.preventDefault();

    // Ambil data dari form
    const form = event.target;
    const email = form.querySelector('[name="email"]').value;
    const password = form.querySelector('[name="password"]').value;

    // Buat objek data
    const data = {
        email: email,
        password: password
    }

    fetch("http://localhost:3000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(function (data) {
            alert('Login Telah Berhasil');
            localStorage.setItem("user", JSON.stringify(data.data))
            window.location.replace("index.html")
        }).catch(function (error) {
            console.log(error);
        });
}

document.querySelector('#signinform').addEventListener('submit', postRegFormData);
