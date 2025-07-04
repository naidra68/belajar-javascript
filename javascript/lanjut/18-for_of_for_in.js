// for of


// TODO Looping Array
// adalah sebuah looping yang dapat menelusuri iterable object.


// * contoh penggunaan

// const mhs = ['Ardian','Eko','Sadono'];

// ? Looping menggunakan for.
// for( let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// ? Looping menggunakan method forEach.
// mhs.forEach(m => console.log(m));

// ? Looping menggunakan for of.
// for( const m of mhs) {
//     console.log(m);
// }


// TODO Looping String

// ? Looping tiap string
// ! Looping tiap karakter pada string menggunakan for of. Tidak bisa menggunakan forEach.
// const nama = 'Ardian';

// for( const n of nama) {
//     console.log(n);
// }


// ? Looping array string
// ! Looping array yang berisi string maka gunakkan forEach. Tidak disarankan menggunakan for of.
// const mhs = ['Ardian','Eko','Sadono'];
// mhs.forEach((m,i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// ? mengapa for of tidak bisa? Karena for of tidak bisa mencetak index dan value secara bersamaan.
// * untuk mengakali-nya ada trik dengan cara menambahkan method entries pada variable mahasiswa-nya.
// for(const [i,m] of mhs.entries()) {
//     console.log(m);
// }




// TODO NodeList

// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.innerHTML));
// for ( n of liNama) {
//     console.log(n.innerHTML);
// }



// TODO arguments
// function jumlahkanAngka() {
//     // reduce tidak bisa
//     // return arguments.reduce((a,i) => a + i);

//     // forEach tidak bisa
//     // let jumlah = 0;
//     // arguments.forEach(a => jumlah += a);
//     // return jumlah;

//     // for of bisa
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));









// for in

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// for (m in mhs) {
//     console.log(mhs[m]);
// }