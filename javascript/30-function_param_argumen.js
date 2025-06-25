// Pembelajaran mengenai Function dan Argument di JS

// // Normal Function
// function tambah(a, b) {
//     return a + b;
// }
// console.log(tambah(5,5)); // 10

// var hasil = tambah(10,10);
// console.log(hasil);

// // Normal Function with different result
// function tambah(a,b) {
//     return a + b;
// }
// console.log(tambah(5,5)); // 10

// var a = 10;
// var b = 15;
// console.log(tambah(a,b)); // 25
// var hasil = tambah(a,b);
// console.log(hasil);


// function tambah(a,b) {
//     return a + b;
// }
// function kali(a,b) {
//     return a * b;
// }
// Catatan
// fungsi prompt akan mengembalikan string, bukan integer
// agar hasil dari a dan b tidak digabungkan selayaknya string maka yang harus dilakukan adalah tambahkan fungsi parseInt didalam fungsi prompt

// var a = parseInt(prompt('Masukkan nilai a'));
// var b = parseInt(prompt('Masukkan nilai b'));

// normal result
// var hasil = tambah(a,b);
// console.log(hasil);

// result with artimatika didalam argument
// var hasil = tambah(a*2,b*2);
// console.log(hasil);

// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);


// Bagaimana jika parameter dan argument tidak sama?

// Jika argument berlebih daripada parameter maka argument berlebih tersebut akan diabaikan oleh Javascript.

// contoh
// function tambah(a,b) {
//     return a + b;
// }
// console.log(tambah(10,20,30)); // 30

// Jika parameter berlebih daripada argument maka parameter berlebih tersebut akan mengembalikan nilai undefined (tidak di isi) oleh javascript.

// contoh
// function tambah(a,b,c) {
//     return a + b;
// }
// console.log(tambah(10,20,30)) // 30

// ## Arguments 
// permasalahan: lalu gmn kalau argumen nya lebih banyak dari parameter, 
// tapi masih pengen dihitung juga, alias kelebihannya diitung juga ya, function! jangan kau hiraukan dia.
// ada caranya, yaitu pakai --Arguments--.

// function tambah() {
//     return arguments;
// }
// var hasil = tambah(1,2,3,'hi',false);
// console.log(hasil);

// Apa itu Arguments?
// "array yg berisi nilai yg dikirimkan saat fungsi dipanggil"
// Pseudovariable: variable yg kayaknya ga keliatan, tapi ada. 
// Utopia - Antara ada dan tiada.
// parameter yg kelebihan, akan ditampung di arguments. 

function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil *= arguments[i];
    }
    return hasil;
}
var coba = tambah(1,2,3,4);
console.log(coba);