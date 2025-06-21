var noAngkot = 1,
    angkotBeroperasi = prompt('Masukkan jumlah angkot yang beroperasi:'),
    jmlAngkot = prompt('Masukkan jumlah angkot:');

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    }
    else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}