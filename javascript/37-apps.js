// Membuat Apps Angkot sederhana menggunakan javascript

//TODO Pengelolaan Penumpang
    //TODO Penumpang naik
        //TODO tambahPenumpang()
    //TODO Penumpang turun
        //TODO hapusPenumpang()
    //TODO 2 parameter :
        //TODO namaPenumpang
        //TODO array penumpang
    //TODO Rules :
        //TODO Jika angkot kosong, penumpang naik duduk di kursi pertama.

        //TODO penumpang berikutnya duduk di kursi selanjutnya secara berurutan.

        //TODO jika ada kursi kosng (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu.

        //TODO asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik.

        //TODO nama penumpang tidak boleh sama, untuk emnghindar kebingungan ketika nanti penumpang turun.
    
var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if ( penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    }
    else {
        for(var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang; 

                return penumpang;
            }
            else if ( penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                return penumpang;
            }
            else if ( i == penumpang.length - 1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}
var hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log("Angkot masih kosong");

        return penumpang;
    }
    else {
        for( i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                    penumpang[i] = undefined;
                return penumpang;
            }
            else if ( i == penumpang.length - 1){
                console.log(namaPenumpang + " tidak ada didalam angkot.");
                return penumpang;
            }
        }
    }
}
 