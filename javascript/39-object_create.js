//* Membuat Object pada Javascript


// 1. Object Literal

var mhs1 = {
    nama : "Tri Ardian",
    nim : "202051026",
    email : "202051026@std.umk.ac.id",
    jurusan : 'Teknik informatika'
}
var mhs2 = {
    nama : "Eko",
    nim : "202351132",
    email : "202351132@std.umk.ac.id",
    jurusan : 'Teknik informatika'
}


// 2. Function Declaration

function buatObjectMahasiswa(nama,nim,email,jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Tri Ardian','202051026','202051026@std.umk.ac.id','Teknik Informatika');


// 3. Constructor Function (keyword new)

function Mahasiswa(nama,nim,email,jurusan) {
    // var this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    // return this
}

var mhs4 = new Mahasiswa('Bagus','202031123','202031123@std.umk.ac.id','Teknik Dirgantara');

// 4. Object.create()

