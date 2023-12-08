
  // // Populate product name and price in the form
  // document.getElementById('productName').value = selectedProduct.name;
  // document.getElementById('productPrice').value = selectedProduct.price;
  // Menambahkan event listener pada tombol "Bayar"
  const bayarButton = document.querySelector('button[type="button"]');
  bayarButton.addEventListener('click', function () {
      // Pemeriksaan URL sebelum melakukan operasi apa pun
      
          // Mendapatkan data dari formulir
          const email = document.getElementById('email').value;
          const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value;
          const phone = document.getElementById('phone').value;
          const productName = document.getElementById('productName').value;
          const productPrice = document.getElementById('productPrice').value;
          const quantity = document.getElementById('quantity').value;
          const checkIn = document.getElementById('checkIn').value;
          const checkOut = document.getElementById('checkOut').value;
  
          // Membuat objek data
          const formData = {
              email: email,
              firstName: firstName,
              lastName: lastName,
              phone: phone,
              productName: productName,
              productPrice:productPrice,
              quantity: quantity,
              checkIn: checkIn,
              checkOut: checkOut
          };
  
          // Mengonversi objek data menjadi JSON
          const formDataJSON = JSON.stringify(formData);
  
          // Menyimpan data ke localStorage
          localStorage.setItem('formData', formDataJSON);
  
          // Menampilkan pesan sukses atau tindakan selanjutnya
          alert('Data berhasil disimpan. Lanjutkan ke halaman pembayaran atau tindakan selanjutnya.');
  
          // Menampilkan data di konsol untuk keperluan debugging
          console.log('Data Pembayaran:', formData);
  
          // Lakukan operasi apa pun yang diperlukan
          // Contoh: Mengirim data ke server (asumsi menggunakan metode POST)
  
          fetch('http://localhost:3000/checkout/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: formDataJSON,
          })
              .then(response => response.json())
              .then(data => {
                  // Handle respons dari server (jika diperlukan)
                  console.log('Respon dari server:', data);
                  // Misalnya, lanjutkan ke halaman pembayaran setelah berhasil membayar
                  window.location.href = 'pembayaran.html';
              })
              .catch(error => {
                  console.error('Terjadi kesalahan:', error);
              });
  
  });
  