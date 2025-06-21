// Tipe data angka non desimal
// Akurat sampai 15 digit
var a = 10;
var b = 123456;
var c = 999999999999999;
var d = 9999999999999999;
console.log(a); // 10
console.log(b); // 123456
console.log(c); // 999999999999999
console.log(d); // 10000000000000000

// Tipe data angka desimal
// 3.14, 0.5, 0.3
var e = 3.14;
var f = 0.5;
console.log(e); // 3.14
console.log(f); // 0.5

// Tipe data angka eksponen
// 123e5, 123e-5
var g = 123e5;
var h = 123e-5;
console.log(g); // 12300000
console.log(h); // 0.00123

// Tipe data angka bilangan oktal
// 022
var i = 0o22;
console.log(i); // 18

// Tipe data angka bilangan hexadecimal
// 0xFF
var j = 0xFF;
console.log(j) // 255

// Tipe data angka special
// 2 / 0 infinity
// -2  / 0 -infinity
// 0 / 0 NaN
var k = 2 / 0;
var l = -2 / 0;
var m = 0 / 0;
var n = 100 / "aple";
var o = 100 / "10";
console.log(k); // infinity
console.log(l); // -infinity
console.log(m); // NaN (not a number)
console.log(n); // NaN (not a number)
console.log(o); // 10