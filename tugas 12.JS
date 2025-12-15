/**
 * Fungsi untuk menjumlahkan dua angka.
 */
function tambah() {
    // Mengambil nilai dari input dan mengkonversinya ke tipe Number
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    // Validasi: Cek jika input bukan angka
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent = "Error: Masukkan angka yang valid!";
        return; // Hentikan fungsi jika ada error
    }

    // Melakukan operasi penjumlahan
    let hasil = num1 + num2;

    // Menampilkan hasil
    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}

/**
 * Fungsi untuk mengurangkan dua angka.
 */
function kurang() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent = "Error: Masukkan angka yang valid!";
        return;
    }

    let hasil = num1 - num2;
    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}

/**
 * Fungsi untuk mengalikan dua angka.
 */
function kali() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent = "Error: Masukkan angka yang valid!";
        return;
    }

    let hasil = num1 * num2;
    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}

/**
 * Fungsi untuk membagi dua angka.
 */
function bagi() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent = "Error: Masukkan angka yang valid!";
        return;
    }

    // Validasi khusus untuk pembagian dengan nol
    if (num2 === 0) {
        document.getElementById("hasilKalkulasi").textContent = "Error: Tidak bisa membagi dengan nol!";
        return; // Hentikan fungsi
    }

    let hasil = num1 / num2;
    document.getElementById("hasilKalkulasi").textContent = "Hasil: " + hasil;
}