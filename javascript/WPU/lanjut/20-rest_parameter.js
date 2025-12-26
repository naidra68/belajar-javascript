// TODO Rest Parameter

// * contoh penggunaan rest parameter

// * contoh pertama
// function myFunct(a,b,...myArgs) {
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }
// console.log(myFunct(1,2,3,4,5));

// * contoh kedua
// function myFunct(...myArgs) {
//     return myArgs;
// }
// console.log(myFunct(1,2,3,4,5));

// * solusi jika ingin menggunakan arguments
// function myFunct() {
//     return Array.from(arguments);
// }

// * solusi lain jika ingin menggunakan arguments
// function myFunct() {
//     return [...arguments];
// }

// console.log(myFunct(1,2,3,4,5));




// function jumlahkan(...angka) {

//     // menggunakan for biasa
//     // let total = 0;
//     // for( const result of angka) {
//     //     total += result;
//     // }
//     // return total;

//     // menggunakan reduce
//     // return angka.reduce((a,b) => a + b);
// }

// console.log(jumlahkan(1,2,3,4,5));



// array destructuring

// const kelompok1 = ['Ardian','Eko','Sadono','Bahtiar','Windi'];
// const [ketua,wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(anggota);


// object destructuring

// const team = {
//     pm: 'Ardian',
//     fe: 'Eko',
//     fe2: 'Sadono',
//     be: 'Bahtiar',
//     uiux: 'Windi',
//     dev: 'Sri'
// }

// const {pm, ...myTeam} = team;
// console.log(pm);
// console.log(myTeam);



// TODO filtering

// function filterBy(type, ...values) {
//     return values.filter(value => typeof value === type);
// }

// console.log(filterBy('boolean', 1,2,false,'Ardian',10,true,'Eko'));
