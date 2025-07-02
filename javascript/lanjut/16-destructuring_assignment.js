// TODO Distructring Array

// const coba = ['satu','dua','tiga'];

// const [a,b,c] = coba;

// console.log(a); // satu
// console.log(b); // dua
// console.log(c); // tiga


// const perkenalan = ['Halo','nama','saya','Tri Ardian'];

// // const [salam,satu,dua,tiga] = perkenalan;
// const [salam, , , nama] = perkenalan;

// console.log(salam);
// console.log(nama);


// TODO swap items

// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// TODO return value pada function

// function coba() {
//     return [1,2];
// }

// const [a,b] = coba();
// console.log(b);



// Rest Parameter

// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values);




// TODO Distructring Object

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// const {nama,umur,email} = mhs;

// console.log(nama); // Tri Ardian
// console.log(umur); // 33
// console.log(email); // ardian.crazy@gmail.com



// TODO Assignment tanpa deklarasi object

// ({ nama, umur} = {nama: 'Tri Ardian',umur: 33});
// console.log(nama);



// TODO Assignment ke variable baru

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



// TODO memberikan default value

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// const {nama,umur,email = 'someone@example.com'} = mhs;
// console.log(e);



// TODO memberi nilai default + assignment ke variable baru

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// const {nama: n,umur: u,email: e = 'someone@example.com'} = mhs;
// console.log(n);
// console.log(u);
// console.log(e);



// TODO Rest Parameter

// const mhs = {
//     nama: 'Tri Ardian',
//     umur: 33,
//     email: 'ardian.crazy@gmail.com'
// }

// const {nama, ...values} = mhs;
// console.log(values);





//  mengambil field pada object, setelah dikirim sebagai parameter untuk function

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