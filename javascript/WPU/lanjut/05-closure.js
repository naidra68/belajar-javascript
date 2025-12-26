//? Lexical Scope



let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100;
console.log(add());
console.log(add());
console.log(add());





// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam('Naidra68'));




// function init() {
//     // let nama = 'Naidra68'; // Local variable
//     return function(nama) { // inner function (closure)
//         console.log(nama); // akses ke parent variable
//     }
// }
// let panggilNama = init();
// panggilNama('Eko');