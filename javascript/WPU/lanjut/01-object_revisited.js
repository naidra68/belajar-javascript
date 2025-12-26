//? cara untuk membuat Object pada javascript

//TODO 1. Object Literal

// let mahasiswa1 = {
//     nama : 'Naidra68',
//     energy : 10,
//     makan : function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama : 'Eko',
//     energy : 10,
//     makan : function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }


//TODO 2. Function Declaration

// function Mahasiswa(nama,energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
//     return mahasiswa;
// }

// let Naidra68 = Mahasiswa('Naidra68', 10);
// let Eko = Mahasiswa('Eko',20);

//TODO 3. Constructor Function
//* keyword new 
function Mahasiswa(nama,energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
    this.main = function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

let Naidra68 = new Mahasiswa('Naidra68', 10);
let Eko = new Mahasiswa('Eko',20);

//TODO 4. Object.create 