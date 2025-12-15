function cekNilai() {
    // Ambil nilai dari input dan konversi ke Number
    const inputNilai = document.getElementById("nilaiSiswa");
    const nilai = Number(inputNilai.value);
    const hasilElement = document.getElementById("hasilGrade");
    
    // Validasi input
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        hasilElement.textContent = "Nilai tidak valid.";
        return;
    }
    
    // Tentukan grade berdasarkan nilai
    let grade;
    if (nilai >= 90) {
        grade = "A (Sangat Baik)";
    } else if (nilai >= 80) {
        grade = "B (Baik)";
    } else if (nilai >= 70) {
        grade = "C (Cukup)";
    } else if (nilai >= 60) {
        grade = "D (Kurang)";
    } else {
        grade = "E (Gagal)";
    }
    
    // Tampilkan hasil
    hasilElement.textContent = `Grade: ${grade}`;
}


