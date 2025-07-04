// TODO Callback


// * Synchronous Callback

// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }

// tampilkanPesan(halo);


// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));



// const mhs = [
//     {
//         "nama": "Tri Ardian",
//         "nim": "202051026",
//         "email": "ardian.crazy@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Eko Purniawan",
//         "nim": "201732144",
//         "email": "ekopurniawan@gmail.com",
//         "jurusan": "Teknik Mesin",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Pur Sadono",
//         "nim": "201834511",
//         "email": "pursadono@gmail.com",
//         "jurusan": "Teknik Industri",
//         "idDosenWali": 3
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for( let i = 0; i < 10000000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama)});
// console.log('selesai');


// * Asynchronous Callback

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4) {
//             if( xhr.status === 200) {
//                 success(xhr.response);
//             }
//             else if ( xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('../javascript/json/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');



// * Asynchronous Callback with JQuery
// console.log('mulai');
// $.ajax({
//     url: '../javascript/json/mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// });
// console.log('selesai');