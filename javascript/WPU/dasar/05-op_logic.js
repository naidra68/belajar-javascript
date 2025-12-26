a = 5;
b = 12;
c = 8;
console.log(a % 2 == 0); // false
console.log(b % 2 == 0); // true
console.log(b % 2 == 0 && b < 10); // false
console.log(c % 2 == 0 && c < 10); // true
console.log(b % 2 == 0 || c < 10); // true
console.log(a < 10); // true
console.log(!(a < 10)); // false