//* Function yang memanggil dirinya sendiri
// function tes() {
//     return tes();
// }
// tes();

// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }

//* function recursive looping forever 
// function tampilAngka(n) {
//     console.log(n);
//     return tampilAngka(n-1);
// }
// tampilAngka(10);

// function tampilAngka(n) {
//     if (n == 0) {
//         return;
//     }

//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(10);

// function faktorial(n){
//     if (n === 0) return 1;
//     console.log(n);
//     return n * faktorial(n-1);
// }
// console.log(faktorial(5));

function faktorial(n) {
    if (n === 0) {
        console.log("Dasar tercapai: n = 0, mengembalikan 1");
        return 1;
    }
    var hasilSementara = n * faktorial(n - 1);
    
    console.log("Saat n = " + n + ", Hasil sementara adalah " + hasilSementara);
    
    return hasilSementara;
}
console.log("\n--- Memulai Perhitungan Faktorial ---");
var hasilAkhir = faktorial(10);
console.log("\n--- Hasil akhir Perhitungan ---");
console.log(hasilAkhir);