function showUpcoming() {
    document.getElementById('upcoming').style.display = 'block';
    document.getElementById('past').style.display = 'none';
}

function showPast() {
    document.getElementById('upcoming').style.display = 'none';
    document.getElementById('past').style.display = 'block';
}

function confirmCancel(bookingId) {
    var confirmation = confirm("Apakah Anda yakin ingin membatalkan pemesanan ini?");
    if (confirmation) {
        // Proses pembatalan pemesanan (dapat ditambahkan logika lainnya)
        alert("Pemesanan dibatalkan!");
        // Hapus elemen booking setelah pembatalan
        document.getElementById(bookingId).remove();
    } else {
        alert("Pembatalan dibatalkan.");
    }
}
