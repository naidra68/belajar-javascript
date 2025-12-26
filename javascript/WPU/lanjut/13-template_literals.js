// String Literal

// let nama = 'Ardian';
// let nim = '202051026';
// let email = `202051026@umk.ac.id`;

//* Template Literal

const mhs = {
    nama: 'Tri Ardian',
    umur: 33,
    nim: '202051026',
    email: '202051026@umk.ac.id'
}

// TODO Menggunakan back tick

// `string text`

// TODO Multi-line String

// `
// string text baris 1
// string text baris 2
// string text baris 3
// `

// console.log(`string 1
// string 2`);


// TODO Embedded Expression

// `string text ${expression} string text`

// const nama = 'Tri Ardian';
// let umur = 33;
// console.log(`Halo, perkenalkan nama saya ${nama}, umur saya ${umur} tahun.`);

// const x = 11
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);
// console.log(x);
// TODO HTML Fragments

// const el =`<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;
// console.log(el);

// TODO Expression Interplation

let a = 10;
let b = 15;
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}.`);

// TODO Tag Template

// tag `string text ${expression} string text`
