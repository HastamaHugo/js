// Deklarasikan array kosong untuk menyimpan daftar belanja
let shoppingList = [];

/**
 * Fungsi untuk menampilkan daftar belanja ke dalam elemen <ul>
 */
function renderList() {
    // Ambil elemen ul dari HTML
    const itemsBelanjaUl = document.getElementById('itemsBelanja');

    // Kosongkan isi <ul> terlebih dahulu untuk menghindari duplikat saat render ulang
    itemsBelanjaUl.innerHTML = '';

    // Gunakan for loop untuk mengiterasi setiap item dalam array shoppingList
    for (let i = 0; i < shoppingList.length; i++) {
        // Buat elemen <li> baru untuk setiap item
        const liElement = document.createElement('li');
        
        // Isi teks <li> dengan item dari array
        liElement.textContent = shoppingList[i];
        
        // Tambahkan <li> ke dalam <ul>
        itemsBelanjaUl.appendChild(liElement);
    }

    // Perbarui teks di paragraf #jumlahItem
    document.getElementById('jumlahItem').textContent = `Jumlah item: ${shoppingList.length}`;
}

/**
 * Fungsi untuk menambah item baru dari input ke daftar belanja
 */
function tambahItem() {
    // Ambil elemen input
    const newItemInput = document.getElementById('newItem');
    
    // Ambil nilai dari input dan hapus spasi di awal/akhir
    const itemText = newItemInput.value.trim();

    // Jika nilai input tidak kosong
    if (itemText !== '') {
        // Tambahkan item ke dalam array shoppingList
        shoppingList.push(itemText);
        
        // Kosongkan kembali nilai input setelah item ditambahkan
        newItemInput.value = '';
        
        // Panggil renderList() untuk memperbarui tampilan
        renderList();
    }
}

/**
 * Fungsi untuk menghapus item terakhir dari daftar belanja
 */
function hapusItemTerakhir() {
    // Jika array shoppingList tidak kosong
    if (shoppingList.length > 0) {
        // Hapus item terakhir dari array
        shoppingList.pop();
        
        // Panggil renderList() untuk memperbarui tampilan
        renderList();
    }
}

// Panggil renderList() di awal skrip untuk inisialisasi tampilan awal
renderList();