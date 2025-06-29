// Konsep this pada arrow function

// Constructor 

// const Mahasiswa = function() {
//     this.nama = 'Naidra68';
//     this.umur = 33;
//     this.sayHello = function() {
//         return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//     }
// }
// const naidra68 = new Mahasiswa();



// Arrow Function 

// const Mahasiswa = function () {
//     this.nama = 'Naidra68';
//     this.umur = 33;
//     this.sayHello = () => {
//         return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//     }
// }

// const naidra68 = new Mahasiswa();

// Object literal

// Benar
// const mhs1 = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     sayHello: function () {
//         return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//     }
// }

// Error
// const mhs1 = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     sayHello: () => {
//         return `Halo, naam saya ${this.nama}, dan saya ${this.umur} tahun.`;
//     }
// }

// console.log(mhs1.sayHello());




// const Mahasiswa = function() {
//     this.nama = 'Naidra68';
//     this.umur = 33;
//     this.sayHello = function() {
//         return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//     }


    // Function Declaration
    // this didalam sini akan merajuk ke window (global scope).

    // setInterval(function () {
    //     console.log(this.umur++);
    // }, 500);

    // Arrow Function
    // karena arrow function tidak ada konsep this maka dia akan merajuk ke object-nya yaitu Mahasiswa.

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }
// const naidra68 = new Mahasiswa();








