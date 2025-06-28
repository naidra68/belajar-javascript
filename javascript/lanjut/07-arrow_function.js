//* Function Declaration

// function tampilPesan(nama) {
//     console.log('Halo ' + nama);
// }
// tampilPesan('Naidra68');

//* Function Expression

// let tampilPesan1 = function(nama) {
//     console.log('Halo ' + nama);
// }
// tampilPesan1('Tri Ardian')

//* Arrow Function

// let tampilPesan2  = (nama) => {
//     console.log('Halo ' + nama);
// }

// tampilPesan2('Eko');




// const tampilPesan = (nama,waktu) => {
//     return `selamat ${waktu}, ${nama}`;
// }
// console.log(tampilPesan('Eko', 'Siang'));



// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Eko'));

//TODO Jika hanya satu parameter maka tidak perlu menulis kurung

// const tampilNama = nama => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Naidra68'));

//TODO Jika didalam function hanya mengembalikan return saja seperti contoh diatas maka penulisan singkat-nya sebagai berikut. 

// implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Tri Ardian'));

//* Arrow function tanpa parameter

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());





// 
let mahasiswa = ['Naidra68','Tri Ardian', 'Eko'];

// const jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => ({ nama: nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);


let jumlahHuruf = mahasiswa.map( nama => ({ nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf);