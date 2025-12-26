// TODO Distructuring Array


// * Contoh Penggunaan

// const coba = ['satu','dua','tiga'];
// const [a,b,c] = coba;

// console.log(a); // satu
// console.log(b); // dua
// console.log(c); // tiga


// * Contoh penggunaan apabila hanya menampilkan beberapa array

// const perkenalan = ['Halo','nama','saya','Tri Ardian'];
// // const [salam,satu,dua,tiga] = perkenalan;
// const [salam, , , nama] = perkenalan;

// console.log(salam);
// console.log(nama);


// * Contoh penggunaan untuk swap items didalam variable

// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// * Contoh penggunakan dialam function untuk mengembalikan nilai

// function coba() {
//     return [1,2];
// }

// const [a,b] = coba();
// console.log(b);



// * Rest Parameter

// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values);




// TODO Distructuring Object


// * Contoh pengunaan

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// const {nama,umur,email} = mhs;

// console.log(nama); // Tri Ardian
// console.log(umur); // 33
// console.log(email); // ardian.crazy@gmail.com



// * Assignment tanpa deklarasi object

// ({ nama, umur} = {nama: 'Tri Ardian',umur: 33});
// console.log(nama);



// * Assignment ke variable baru

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// const {
//     nama: m,
//     umur: u,
//     email: e
// } = mhs;

// console.log(m); // Tri Ardian
// console.log(u); // 33
// console.log(e); // ardian.crazy@gmail.com



// * memberikan default value

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// const {nama,umur,email = 'someone@example.com'} = mhs;
// console.log(e);



// * memberi nilai default + assignment ke variable baru

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// const {nama: n,umur: u,email: e = 'someone@example.com'} = mhs;
// console.log(n);
// console.log(u);
// console.log(e);



// * Rest Parameter

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// const {nama, ...values} = mhs;
// console.log(values);





// * mengambil field pada object, setelah dikirim sebagai parameter untuk function

// const mhs = {
//     id: 123,
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// function getIdMhs({id}) {
//     return id;
// }

// console.log(getIdMhs(mhs));