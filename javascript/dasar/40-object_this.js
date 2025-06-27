//? This

// var a = 10;
// console.log(this.a);

//* membuat object

//TODO cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
//* this mengembalikan object Global

//TODO cara 2 - object literal
// var obj = {a : 10, nama : "Naidra68"};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
//* this mengembalikan object yang bersangkutan

//TODO cara 3 - constructor
// function Halo() {
//     console.log(this);
//     console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan boject yang baru dibuat