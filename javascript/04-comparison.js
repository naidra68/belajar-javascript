var a = 10;
var b = 10;
var ab = a == b;
var not = a != b;
console.log(ab); // true
console.log(not); // false

var x = 10;
var y = "10";
var xy = x == y;
var strict = x === y;
console.log(xy); // true
console.log(strict) // false

var c = 5;
var d = 10;
var cd = c < d;
var dc = c > d;
console.log(cd); // true
console.log (dc); // false

var e = 5;
var f = 5;
var ef = e <= f;
var fe = e >= f;
console.log(ef); // true
console.log(fe); // true

var g = 5;
var h = 6;
var gh = g <= h;
var hg = g >= h;
console.log(gh); // true
console.log(hg); // false