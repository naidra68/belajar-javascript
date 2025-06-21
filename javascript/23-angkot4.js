var noAngkot = 1,
    angkotBeroperasi = prompt('Masukkan Jumlah Angkot yang Beroperasi : '),
    jmlAngkot = prompt('Masukkan jumlah Angkot : '),
    angkotLembur = 8;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot != 5) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    }
    else if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
    }
    else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}