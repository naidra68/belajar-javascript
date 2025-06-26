//? Kenapa Object?

//* Data Mahasiswa Normal dan perhitungan IPSemester.

// var namaMhs = "Naidra68";
// var umurMhs = 31;
// var lulus = true;
// var IPSemester = [2.90, 3.10, 3.25, 2.88, 3.04];
// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for(var i = 0; i < IPSemester.length; i++) {
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// }
// console.log(IPKumulatif(IPSemester));

//* Data Mahasiswa dan perhitungan IPSemester menggunakan array.

// var mahasiswa = ['Naidra68',true,[2.90,3.10,3.25,2.88,3.04]];

// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for(var i = 0; i < IPSemester.length; i++) {
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// }
// var hasil = IPKumulatif(mahasiswa[2]);
// console.log(hasil);

//* Data Mahasiswa dan perhitungan IPSemester menggunakan object.

// var mahasiswa = {
//     nama : "Tri Ardian",
//     lulus : true,
//     IPSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
//     IPKumulatif : function() {
//         var total = 0;
//         var ips = this.IPSemester;
//         for(var i = 0; i < ips.length; i++) {
//             total += ips[i];
//         }
//         return total/ips.length;
//     }
// }
// var hasil = mahasiswa.IPKumulatif();
// console.log(hasil);

//? Anatomi Object?

// var Orang = {
//     nama : "Tri Ardian",
//     umur : 31,
//     pekerjaan : "Software Enginner",
//     sapa : function() {
//         return 'Hi,\nnama saya ' + this.nama + '\nusia saya ' + this.umur + ' tahun \nsaya adalah seorang ' + this.pekerjaan;
//     }
// }
// var hasil = Orang.sapa();
// console.log(hasil);


//? Praktek membuat object

function styles(s) {
    console.log("=".repeat(s));
    return;
}

//* Membuat object
var mhs = {
    nama : "Tri Ardian",
    umur : 31,
    ips : [3.00, 2.50, 3.20],
    alamat : {
        jalan : "Jl. Merdeka No. 23",
        kota : "Semarang",
        provinsi : "Jawa Tengah"
    }
};

// Menampilkan hasil Object
console.log(mhs.nama);
console.log(mhs["nama"]);
styles(60);

console.log(mhs.umur);
console.log(mhs["umur"]);
styles(60);

console.log(mhs.ips);
console.log(mhs["ips"]);
styles(60);

console.log(mhs.alamat);
console.log(mhs["alamat"]);
styles(60);

// Menampilkan hasil object yang terdapat array didalam-nya. Ditampilkan satu per satu.
console.log(mhs.ips[0]);
console.log(mhs.ips[1]);
console.log(mhs.ips[2]);

// Menampilkan hasil object yang terdapat object didalam-nya.
console.log(mhs.alamat["jalan"]);
console.log(mhs.alamat["kota"]);
console.log(mhs.alamat["provinsi"]);