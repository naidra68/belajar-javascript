var nama = prompt('Masukkan nama : ');
    noAngkot = 1,
    angkotBeroperasi = prompt('Masukkan angkot yang ingin dioperasikan : '),
    jmlAngkot = prompt('Masukkan Jumlah seluruh angkot : ');


while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    
}

console.log('Dibuat oleh ' + nama);