document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signinForm');
    const successPopup = document.getElementById('successPopup');

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Simulasi data yang berhasil
        const userData = {
            username: 'contoh_user',
            password: 'contoh_password'  // Gantilah dengan nilai yang sesuai dari formulir login
        };

        // Tampilkan popup atau pesan berhasil
        showSuccessPopup();

        // Simpan data pengguna ke local storage
        localStorage.setItem("user", JSON.stringify(userData));

        // Lakukan fetch dengan metode POST
        fetch("http://localhost:3000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response Data:', data);
                // Lakukan sesuatu dengan data respons jika diperlukan
            })
            .catch(error => console.error('Fetch Error:', error));

        // Redirect atau navigasi ke halaman beranda (index.html)
        window.location.replace("index.html");
    });

    function showSuccessPopup() {
        // Tampilkan popup
        successPopup.style.display = 'block';

        // Sembunyikan popup setelah beberapa detik (opsional)
        setTimeout(function () {
            successPopup.style.display = 'none';
        }, 3000); // Sembunyikan setelah 3 detik, sesuaikan kebutuhan Anda
    }
});

