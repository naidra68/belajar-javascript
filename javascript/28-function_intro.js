
// Built.in Function
var nama = "Nadra68",
    bil = Math.random();
console.log(nama.charAt(5));
console.log(bil);

// Function Declaration

function jumlahDuaBilangan(a, b) {
    var total;
    total = a + b;
    
    return total;
}

// Function Expression

var jumlahDuaBilangan = function(a, b) {
    var total;
    total = a + b;

    return total;
}

alert(jumlahDuaBilangan(2,3));
alert(jumlahDuaBilangan(1000,200));
alert(jumlahDuaBilangan(100,17.5));