// Create function
function jmlVolumeKubus(a, b) {
    var total;
    total = (a ** 3) + (b ** 3);

    return total;
}

// Running Function

// Panggil function beserta parameter-nya
console.log(jmlVolumeKubus(8,3));

// definisikan function ke dalam variable lalu panggil variable-nya
var hitung = jmlVolumeKubus(8,3);
console.log(hitung);