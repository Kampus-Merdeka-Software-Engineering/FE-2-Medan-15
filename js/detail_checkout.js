document.addEventListener('DOMContentLoaded', function () {
    // Ambil data formulir dari sessionStorage
    const reservationData = JSON.parse(sessionStorage.getItem('reservationData'));

    // Tampilkan data di halaman detail_checkout.html
    if (reservationData) {
        // Tampilkan data identitas
        populateTable('identitas-row', ['Email', 'Nama Depan', 'Nama Belakang', 'Nomor Telepon'], [reservationData.email, reservationData.firstName, reservationData.lastName, reservationData.phone]);

        // Tampilkan data reservasi
        populateTable('reservasi-row', ['Jenis Kamar', 'Harga Kamar', 'Jumlah Kamar', 'Check-in', 'Check-out'], [reservationData.productName, reservationData.productPrice, reservationData.quantity, reservationData.checkIn, reservationData.checkOut]);
    }
});

// Function to dynamically populate a table with data
function populateTable(tableId, headerLabels, data) {
    const table = document.getElementById(tableId);

    // Clear existing rows
    table.innerHTML = '';

    // Create header row
    const headerRow = document.createElement('tr');
    headerLabels.forEach(label => {
        const th = document.createElement('th');
        th.textContent = label;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create data row
    const dataRow = document.createElement('tr');
    data.forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        dataRow.appendChild(td);
    });
    table.appendChild(dataRow);
}
