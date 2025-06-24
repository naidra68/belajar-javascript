var n = '8',
    s = '',
    s1 = '',
    s2 = '',
    s3 = '',
    s4 = '',
    s5 = '',
    s6 = '',
    s7 = '';

// Segitiga siku-siku bintang 1
for (var i = 0; i < n; i++) {
    for (var j = 0; j <= i; j++) {
        s+= '*';
    }
    s+= '\n';
}
console.log(s);


// Segitiga siku-siku terbalik bintang
for (var i = n; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s1 += '*';
    }
    s1 += '\n';
}
console.log(s1)

// Segitiga siku-siku bintang 2
for (var i = 1; i <= n; i++) {
    for (var j = 0; j < n - i; j++) {
        s2+= ' ';
    }
    for (var k = 0; k < i; k++) {
        s2+= '*';
    }
    s2+= '\n';
}
console.log(s2);

// Segitiga siku-siku terbalik bintang
for (var i = 0; i < n; i++) {
    for (var j = 0; j < i; j++) {
        s3 += ' ';
    }
    for (k = 0; k < n - i; k++) {
        s3+= '*';
    }
    s3 += '\n';
}
console.log(s3)

// Segitiga top solid dengan spasi dan bintang

for (var i = 1; i <= n; i++) {  // intinya untuk nyetak baris sebanyak nilai n gitu yang kupahami.
    for (var j = 0; j < n - i; j++) { // untuk nyetak spasi di depan, biar nongol ditengah ntar bintangnya membentuk segitiga.
        s4 += ' ';
    }
    for (var k = 0; k < (2 * i) - 1; k++) { // disini bentuk segitiga nya nogol, kuncinya ada di (2 * i) - 1.
        s4 += '*';
    }
    s4 += '\n';
}
console.log(s4);

// Segitiga bottom solid dengan spasi dan bintang

for (var i = n - 0; i >= 1; i--) {
    for (var j = 0; j < n - i; j++) {
        s5 += ' ';
    }
    for (var k = 0; k < (2 * i) - 1; k++) {
        s5 += '*';
    }
    s5 += '\n';
}
console.log(s5);

// Segitiga belah ketupat
for (var i = 1; i <= n; i++) {
    for (var j = 0; j < (n - i); j++) {
        s6 += ' ';
    }
    for (var k = 0; k < (2 * i) - 1; k++) {
        s6+= '*';
    }
    s6 += '\n';
}
for (var l = n - 1; l >= 1; l--) {
    for (var j = 0; j < n - l; j++) {
        s6+= ' ';
    }
    for (var k = 0; k < (2 * l) - 1; k++) {
        s6+= '*';
    }
    s6 += '\n';
}
console.log(s6)


// Papan Catur

for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        s7 += ((i + j) % 2 == 0) ? "#" : " ";
    }
    s7 += '\n';
}
console.log(s7);