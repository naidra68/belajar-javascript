var repeat = true;

while(repeat) {
var chance = 3,
    rand = Math.floor(Math.random() * 10) - 1,
    hasil = "";
// console.log(rand);

while (chance >= 1) {
    alert('Memulai permainan dengan ' + chance + 'x kesempatan');
    var p = prompt("Masukkan angka (1-10) : ");

    if (p == rand) {
        hasil = 'BETUL!';
        alert('HORE! Angka Anda ' + hasil + ' Angka yang anda tebak sama yaitu ' + rand);
        break;
    }
    else if (p > rand) {
        hasil = 'TINGGI';
        chance -= 1;
        alert('DUH! Angka Anda ' + hasil + ' kurang tepat.\n' + p + ' adalah angka yang anda masukkan' + '\ntersisa ' + chance + ' kesempatan lagi.');
    }
    else if (p < rand) {
        hasil = 'RENDAH';
        chance -= 1;
        alert('YAH! Angka Anda ' + hasil + ' kurang tepat.\n' + p + ' adalah angka yang anda masukkan' + '\ntersisa ' + chance + ' kesempatan lagi.');
    }
    else {
        alert('input yang anda masukkan bukan 1-10 melainkan input lain yang tidak valid.\n' + p + ' adalah input tidak valid.');
    }
    if (chance == 0) {
        alert('OOPS! Anda gagal \nangka yang dicari adalah ' + rand);
    }
}
repeat = confirm("Main Lagi nih?");
}
alert('TERIMA KASIH SUDAH BERMAIN.');