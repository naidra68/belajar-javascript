// TODO Destructuring Function return value

// function kalkulasi(a,b) {
//     return [a+b, a-b, a*b, a/b];
// }

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// console.log(kali);


// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);


// function kalkulasi(a,b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi,tambah,kali,kurang} = kalkulasi(2,3);
// console.log(kurang);





// TODO Destructuring function arguments
// const mhs1 = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com',
//     nilai: {
//         tugas: 80,
//         uts: 85,
//         uas: 75
//     }
// }

// function cetakMhs(nama,umur) {
//     return `Halo nama saya ${nama}, saya berumur ${umur} tahun.`;
// }
// console.log(mhs1.nama,mhs1.umur);

// function cetakMhs(mhs) {
//     return `Halo nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
// console.log(mhs1);

// function cetakMhs({nama, umur}) {
//     return `Halo nama saya ${nama}, saya berumur ${umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

// function cetakMhs({nama, umur, nilai: {tugas,uts,uas} }) {
//     return `Halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
// }
// console.log(cetakMhs(mhs1));
