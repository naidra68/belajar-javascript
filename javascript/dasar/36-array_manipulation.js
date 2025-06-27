//* Manipulasi Array Manual

//* 1. Menambahkan isi array
// var arr = ['a',1,true];
// console.log(arr);
// console.log(arr[1]);

// var arr1 = [];
// arr1[0] = "Naidra68";
// arr1[1] = "Tri";
// arr1[2] = "Ardian";
// arr1[4] = "Eko";

// console.log(arr1);

//* 2. Menghapus isi array
// var arr = ["Naidra68", "Tri", "Ardian"];
// arr[1] = undefined;
// console.log(arr);

//* 3. Menampilkan isi Array
// var arr = ['Naidra68','Tri','Ardian','Eko'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + i + ' : ' + arr[i]);
// }

//* Manipulasi Array dengan method

// var arr = ['Naidra68','Tri','Ardian'];

// 1. join
//? method join berfungsi untuk menampilkan semua isi array. Default-nya akan ditampilkan semua array dan dipisah dengan "koma". Jika ingin menghilangkan koma maka bisa menambahkan argument didalam join.

// console.log(arr.join('\n'));

// 2. push & pop
//? method push berfungsi untuk menambahkan element array baru yang bertambah diakhir array. Bisa menambah satu persatu maupun banyak sekaligus.

// arr.push('Eko');
// arr.push('Sri','Purniawan');
// console.log(arr.join('\n'));

//? method pop berfungsi untuk menghapus array terakhir. Bisa menghapus satu persatu maupun abnyak sekaligus. 
// arr.pop('Ardian');
// console.log(arr.join('\n'));


// 3. unshift & shift

//? method unshift berfungsi untuk menambahkan element array baru yang bertambah diawal array. Fungsi ini sama seperti pop namun perbedaan-nya penambahan di awal dan di akhir.
// arr.unshift('Eko');
// console.log(arr.join('\n'));

//? method shift berfungsi untuk menghapus array di awal. Fungsi ini sama seperti pop namun perbedaan-nya sama saja di awal dan di akhir.
// arr.shift();
// console.log(arr.join('\n'));

// 4. splice
//* splice(indexAwal, indexHapus, elementBaru1,elementBaru2, ...) 
// arr.splice(2, 0, 'Eko');
// arr.splice(2, 0, 'Eko','Sri');
// arr.splice(1, 2,);
// arr.splice(1, 2, 'Eko','Sri');
// console.log(arr.join('\n'));

// 5. slice
//* slice(awal,akhir); 
// var arr1 = ['Naidra68','Tri','Sri','Ardian','Eko'];
// var arr2 = arr1.slice(1,3);

// console.log(arr1.join(' - '));
// console.log(arr2.join('\n'));

// 6. forEach

// var angka = [1,2,3,4,5,6,7,8];

// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });
        
// var nama = ['Naidra68','Tri','Ardian'];

// nama.forEach(function (e, i){
//     console.log('Mahasiswa ke-' + i + ' adalah : ' + e);
// });

// 7. Map
//* method map digunakan untuk mengembalikan nilai array. Jika menggunakan forEach maka dia tidak mau mengembalikan nilai array tersebut.
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join('\n'));

// 8. sort
// var angka = [1,2,5,3,6,8,4];
// angka.sort();
// console.log(angka.join('\n'));

//! Perlu diperhatikan bahwa, jika ingin mengurutkan angka yang teracak didalam array kita bisa menggunakan sort(). Namun, jika angka tersebut ada puluhan dan seterusnya maka menggunakan sort() saja tidaklah cukup.
// angka.sort(); //* ini akan menampilkan 1-10-2-20-3-4-5-6-8

//? solusi? menggunakan function untuk mengurutkan-nya.
// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function(i,j){
//     return i-j;
// });
// console.log(angka.join('-'));

// 9. filter

//* method filter digunakan untuk menyaring angka yang di kembalikan. Contoh jika menulis kembalian x > 5. Maka angka yang lebih besar dari 5 akan ditampilkan semua.

// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.filter(function(x) {
//     return x > 5;
// });
// console.log(angka2.join('-'));

//* method find digunakan untuk menemukan angka yang di kembalikan. Sama seperti filter, namun berbeda. Dengan find, anda akan mengembalikan nilai tidak semuanya. Hanya 1 saja. Find tidak mengembalikan nilai array. Jadi jangan gunakan method join.

// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.find(function(x) {
//     return x > 5;
// });
// console.log(angka2);