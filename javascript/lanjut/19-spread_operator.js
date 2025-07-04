// TODO Spread Operator
// memecah (expand / unpack) iterables menjadi single element.


// const mhs = ['Ardian','Eko','Sadono'];
// console.log(...mhs[0]);



// TODO menggabungkan 2 array
// const mhs = ['Ardian','Eko','Sadono'];
// const dosen = ['Windi','Bahtiar','Qyara'];

// * menggunakan spread operator
// const orang = [...mhs, ...dosen];

// * menambahkan value array ditengah-tengah penggabungan array
// const orang = [...mhs, 'Aji', ...dosen];

// * mengunakan method untuk menggabungkan 2 array
// const orang = mhs.concat(dosen);

// console.log(orang);




// TODO mengcopy array

// ? ketika menggunakan code dibawah ini akan tampak baik-baik saja, namun sebenarnya ini bukanlah mengcopy array.
// const mhs = ['Ardian','Eko','Sadono'];
// const mhs1  = mhs;
// console.log(mhs1);

// ? ketika akan menimpa mhs1 maka mhs akan ikut tertimpa juga
// const mhs = ['Ardian','Eko','Sadono'];
// const mhs1  = mhs;
// mhs1[0] = 'Qyara';
// console.log(mhs);
// console.log(mhs1);


// ? Solusi? Menggunakan spread operator dapat mengatasi hal tersebut.
// const mhs = ['Ardian','Eko','Sadono'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Qyara';
// console.log(mhs);
// console.log(mhs1);


// TODO Contoh penggunaan lain dari spread operator

// const liMhs = document.querySelectorAll('li');

// * cara manual dengan for looping
// const mhs = [];
// for( let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// * dengan method map dan spread operator
// const mhs = [...liMhs].map(m => m.textContent);

// console.log(mhs);




// TODO Studi Kasus

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => { if(h ===' '){h = '&nbsp;'} return `<span>${h}</span>`}).join('');

nama.innerHTML = huruf;