// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main : function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energy += jam * 2;
//         console.log(`Halo  ${this.nama}, selamat tidur`);
//     }
// };

// function Mahasiswa(nama,energy) {
//     // Otomatis
//     let mahasiswa = Object.create(methodMahasiswa);
    
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
    
//     return mahasiswa;
// }

// let Naidra68 = Mahasiswa('Naidra68', 10);
// let Eko = Mahasiswa('Eko',20);


// function Mahasiswa(nama,energy) {
//     // let mahasiswa = Object.create(methodMahasiswa);
//     // let mahasiswa = {};
//     // let this = Object.create(Mahasiswa.prototype);
//    this.nama = nama;
//    this.energy = energy;

//     // return mahasiswa;
//     // return this;
// }
// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, Selamat Makan!`;
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energy -= jam;
//     return `Halo ${this.nama}, Selamat Bermain!`;
// }
// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += jam * 2;
//     return `Halo ${this.nama}, Selamat Tidur!`;
// }
// let naidra68 = new Mahasiswa('Naidra68', 10);

//* Versi Class
// class Mahasiswa {
//     constructor(nama, energy) {
//         this.nama = nama;
//         this.energy = energy;
//     }
    
//     makan(porsi) {
//         this.energy += porsi;
//         return `Halo ${this.nama}, Selamat Makan!`;
//     }
//     main(jam) {
//         this.energy -= jam;
//         return `Halo ${this.nama}, Selamat Bermain!`;
//     }
//     tidur(jam) {
//         this.energy += jam * 2;
//         return `Halo ${this.nama}, Selamat Tidur!`;
//     }
// }
// let naidra68 = new Mahasiswa('Naidra68', 10);
// let eko = new Mahasiswa('Eko', 20);
