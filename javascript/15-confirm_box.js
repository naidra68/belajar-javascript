// confirm('Kamu Yakin?');

// var tes = confirm('Kamu Yakin?');

// alert(tes)

// Pengkondisian
// if(tes == true) {
//     alert('User menekan tombol OK!');
// }
// else {
//     alert('User menekan tombol CANCEL!');
// }

// Pengulangan

alert('Selamat Datang...');
var lagi = true;

while (lagi) {
    var nama = prompt('Masukkan Nama: ');
    alert('Halo ' + nama);

    lagi = confirm('Coba Lagi?');
}

alert("Terima Kasih");