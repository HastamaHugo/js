// Dapatkan referensi ke elemen-elemen yang diperlukan
const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentList = document.getElementById('commentList');
const errorComment = document.getElementById('errorComment');

// Tambahkan event listener click ke tombol submitComment
submitComment.addEventListener('click', function() {
    // Ambil nilai dari textarea
    const commentText = commentInput.value.trim();
    
    // Bersihkan pesan error di awal
    errorComment.textContent = '';
    
    // Validasi: Jika nilai textarea kosong atau kurang dari 5 karakter
    if (commentText === '' || commentText.length < 5) {
        errorComment.textContent = 'Komentar harus memiliki minimal 5 karakter.';
        return; // Hentikan proses jika tidak valid
    }
    
    // Jika valid, buat elemen div baru untuk komentar
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    
    // Buat elemen p untuk menampilkan teks komentar
    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = commentText;
    
    // Tambahkan tombol hapus
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Hapus';
    
    // Tambahkan event listener ke tombol hapus
    deleteButton.addEventListener('click', function() {
        commentList.removeChild(commentItem);
    });
    
    // Tambahkan elemen p dan tombol hapus ke dalam div komentar
    commentItem.appendChild(commentParagraph);
    commentItem.appendChild(deleteButton);
    
    // Tambahkan komentar ke daftar komentar
    commentList.appendChild(commentItem);
    
    // Kosongkan kembali nilai textarea
    commentInput.value = '';
});

// Event listener untuk tombol Enter di textarea
commentInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.ctrlKey) {
        submitComment.click();
    }
});