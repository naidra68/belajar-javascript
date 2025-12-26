// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

//* Ketika dijalankan akan terdapat RefrenceError karena nama tidak pernah di definisikan. 

// console.log(nama);

//* Ketika dijalankan akan terjadi creation phase di global context.
//* Simple-nya, javascript akan mencari variable atau function terlebih dahulu ada atau tidak pada seluruh baris kode.


//TODO Variable 
//? Jika ada, maka javascript akan membuat nama var otomatis yang berisi = undefined.
//! Jika tidak? kembali ke baris nomer 5.


//* contoh variable

// console.log(nama); // undefined
// var nama = 'Naidra68';


//TODO Function
//? Jika ada, maka javascript akan mengisi function itu sendiri.
//! Jika tidak? kembali ke baris nomer 5.


//* contoh function

// jika ditulis tanpa (), maka dia akan mengembalikan string function itu sendiri.

// console.log(sayHello);

// jika ditulis diatas variable, maka dia akan menampilkan undefined setiap var yang di tulis. Seperti halnya contoh diatas.

// console.log(sayHello());


// var nama = 'Naidra68';
// var umur = 33;

// jika ditulis dibawah variable dan diatas function maka tidak ada masalah.

// console.log(sayHello());


// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
//  yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


//* Semua penjelasan itu disebut Hoisting Javascript.



//? Namun, apakah hanya dua hal tersebut yang di definisikan javascript? Ternyata ada lagi.  

//* Javascript mendefinisikan object window sebagai global object dan this sebagai object window.

//* Bahkan ketika file JS dikosongkan dan kalian mengecek window atau this di console maka dua object tersebut akan didefinsikan oleh javascript, selain itu akan error.
// window = global object
// this = window

// execution phase






//TODO Studi Kasus


// var nama = 'Tri Ardian';
// var username = 'Naidra68';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }
// console.log(cetakURL(username));

//? Mengapa berubah?

// console.log(cetakURL('@ekopurniawan'));

//* Hal ini dapat terjadi jika paramater dalam function ditulis. Ketika memanggil function dengan menambahkan argument maka dia akan mencari parameter function tersebut.

//* Jika ada parameter, dia akan menggunakan parameter tersebut sebagai variable.
//! Jika tidak ada parameter, dia akan menggunakan variable global. Ini biasanya disebut scope global. 

//? Bagaimana jika tidak menambahkan parameter di function? dan tetap mengetikkan argument di pemanggilan function?

// var nama = 'Tri Ardian';
// var username = '@naidra68';

// function cetakURL() {
//     console.log(arguments[0]);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }
// console.log(cetakURL('@eko'));

// hasilnya adalah, dia tetap akan menggunakan variable global dan tidak menimpa dengan argument.

// Namun, dibelakang layar, argument yang ditulis sebenarnya sudah tersimpan di dalam memori dan telah ditangkap oleh object arguments.






//TODO Studi Kasus biar paham mengenai stack execution (tumpukan eksekusi) 

// function a() {
//     console.log('Ini a');

//     function b() {
//         console.log('Ini b');

//         function c() {
//             console.log('Ini c');
//         }

//         c();
//     }

//     b();
// }

// a();


// function satu() {
//     var nama = 'Naidra68';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Purniawan';

// satu();
// dua('Eko');
// console.log(nama);