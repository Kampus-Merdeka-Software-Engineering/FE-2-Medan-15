function signIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
      // Buat objek data
      const data = {
        user_name: username,
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

document.querySelector('Masuk').addEventListener('Masuk', postRegFormData);

