// Deklarasi variabel
let myName = "Wildha Aulya";
const myAge = 16;

// Menampilkan nilai di console
console.log(myName);
console.log(myAge);

// Mengubah teks <h1>
document.getElementById("nama-saya").innerHTML = "Halo, Saya " + myName;

// Menampilkan deskripsi singkat
document.getElementById("info-diri").innerHTML = "Saya berusia " + myAge + " tahun dan suka belajar pemrograman.";

// Mengubah style tombol menjadi hijau menggunakan JavaScript
const tombol = document.getElementById("tombol-pesan");
tombol.style.backgroundColor = "#4CAF50"; // Warna hijau
tombol.style.color = "white";
tombol.style.padding = "10px 20px";
tombol.style.border = "none";
tombol.style.borderRadius = "4px";
tombol.style.cursor = "pointer";
tombol.style.fontSize = "16px";

// Efek hover menggunakan JavaScript
tombol.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#45a049"; // Hijau lebih gelap saat hover
});
tombol.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#4CAF50"; // Kembali ke hijau normal
});

// Fungsi untuk menampilkan alert
function showAlert() {
    alert("Anda telah mengklik tombol!");
}