document.addEventListener('DOMContentLoaded', function () {
    const bayarButton = document.querySelector('button[type="button"]');
    bayarButton.addEventListener('click', function () {
      const email = document.getElementById('email').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const phone = document.getElementById('phone').value;
      const productName = document.getElementById('productName').value;
      const productPrice = document.getElementById('productPrice').value;
      const quantity = document.getElementById('quantity').value;
      const checkIn = document.getElementById('myDate').value;
      const checkOut = document.getElementById('myDate2').value;
  
      const formData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        productName: productName,
        productPrice: productPrice,
        quantity: quantity,
        checkIn: checkIn,
        checkOut: checkOut
      };
  
      const formDataJSON = JSON.stringify(formData);
  
      localStorage.setItem('formData', formDataJSON);
  
      alert('Data berhasil disimpan. Kami tunggu kedatangan Anda!');
  
      console.log('Data Pembayaran:', formData);
  
      fetch('http://localhost:3000/checkout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formDataJSON,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Respon dari server:', data);
          window.location.href = 'detail_checkout.html';
        })
        .catch(error => {
          console.error('Terjadi kesalahan:', error);
        });
    });
  });
  