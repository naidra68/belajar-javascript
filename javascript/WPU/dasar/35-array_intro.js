//* Array intro

var hari = ['Senin','Selasa','Rabu'];
var mhs = ['Naidra68','Tri','Ardian'];
console.log(hari);
console.log(mhs);

//* Key and value in Array
var binatang = ['Kucing','Kelinci','Monyet','Panda','Koala','Sapi'];
console.log(binatang[4]); // Koala
console.log(typeof(binatang)); // object
console.log(binatang.length); // 6

//! Jumlah index dan element berbeda. Index pada array dimulai dari 0 dan Element pada array dimulai dari 1.

//* Element pada array berbagai tipe data

// Array dengan tipe data berbeda
var myArr = ['teks',2,false];
console.log(myArr);

// Array yang berisi function.
var myFunc = function() {
    console.log('Halo Array!');
}
myFunc();

// Array dengan tipe data berbeda bahkan ada function
var myArr2 = ['teks',2,false,myFunc];
console.log(myArr2);

// Array didalam Array (Array bersarang)

var myArr3 = ['teks',2,false,myFunc,[4,5,6]];
console.log(myArr3);

//? Bagaimana cara menampilkan angka 5 ke console?
console.log(myArr3[4][1]);
