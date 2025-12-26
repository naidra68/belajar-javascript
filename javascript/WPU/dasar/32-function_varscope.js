// Global scope / window scope

var a = 1;

function test() {
    // Name Conflict
    var a = 2;
    console.log(window.a); // 1 Mengakses variable global.
    console.log(a); // 2 mengakses variable local.
}
test()

//? Bagaimana cara javascript untuk mengambil variable global?

//* ketika didalam fungsi tidak didefinisikan variable nya maka dia akan mengambil variable global sesuai nama-nya.
function scope() {
    a = 4;
}
scope()
console.log(a); // 4

//? Bagaimana jika didalam function, saya memiliki "a" tapi tidak mendefinisikan variable local dan diluar juga tidak ada variable global?

//* ketika didalam fungsi tidak ada variable local maka javascript akan mengambil variable global.

//* Ketika tidak ada variable local maupun global? Maka javascript secara otomatis akan membuat variable global.

//! Peringatan : Jika anda bermaksud untuk membuat variable local maka pastikan didalam fungsi anda mendefinisikan variable nya. Karena jika tidak maka javascript akan memuat itu dengan variable global.

function auth() {
    b = 6;
}
auth()
console.log(b); // 6

//? Bagaimana agar javascript paham, jika saya ingin variable local yang diakses ketika saya tidak mendefinisikan variable-nya di local (function) maupun di global?

//* menggunakan "use strict" akan memaksa javascript paham bahwa saya ingin mengambil variable local, penggunaan use trict dipakai diawal penulisan code.

"use strict";
function strict(){
    c = 7;
}
strict()
console.log(c);


//* variable scope cukup memusingkan bagi saya karena perilaku-nya yang tidak biasa dan saya belum terbiasa juga.

//* Ketika saya menambahkan parameter di function, maka secara otomatis parameter tersebut adalah variable local.

//* Ketika saya mengakses function tes dengan argument saya isi "2" maka dia akan mengambil variable local.

//! Ketika saya mengakses function tes dengan argument var "d" maka dia akan mengambil variable global. 

var d = 1;
function tes(d){
    console.log(d);
    return d;
}
tes(2);
tes(d);
console.log(tes(2));
console.log(d);
tes(d+5);