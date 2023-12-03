document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen formulir
    const contactForm = document.getElementById('contactForm');

    // Menambahkan event listener pada saat formulir disubmit
    contactForm.addEventListener('submit', function (event) {
        // Mencegah pengiriman formulir secara default
        event.preventDefault();

        // Mendapatkan nilai dari formulir
        const email = document.getElementById('email').value;
        const title = document.getElementById('title').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;

        // Membuat objek data
        const formData = {
            email: email,
            title: title,
            firstName: firstName,
            lastName: lastName,
            phone: phone
        };

        // Mengonversi objek data menjadi JSON
        const formDataJSON = JSON.stringify(formData);

        // Menyimpan data ke localStorage
        localStorage.setItem('formData', formDataJSON);

        // Menampilkan pesan sukses atau tindakan selanjutnya
        alert('Data berhasil disimpan. Lanjutkan ke halaman pembayaran atau tindakan selanjutnya.');

        // Mengarahkan pengguna ke halaman checkin.html
        window.location.href = 'checkin.html';
    });

    // Menambahkan event listener pada tombol "Bayar"
    const bayarButton = document.querySelector('button[type="button"]');
    bayarButton.addEventListener('click', function () {
        // Mendapatkan data dari formulir
        const email = document.getElementById('email').value;
        const title = document.getElementById('title').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;

        // Membuat objek data
        const formData = {
            email: email,
            title: title,
            firstName: firstName,
            lastName: lastName,
            phone: phone
        };

        // Mengonversi objek data menjadi JSON
        const formDataJSON = JSON.stringify(formData);

    });
});
