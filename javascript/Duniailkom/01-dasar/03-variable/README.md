# #️⃣ Variabel

Pembahasan pertama adalah Variabel, dimana variabel ini digunakan untuk mengolah,menyimpan, dan menghasilkan data. Semua data akan disimpan ke dalam sebuah variabel.

> Mulai dari sini, penjelasan javascript akan membosankan karena kita akan berurusan dengan Console pada Developer Tools dan tidak menerapkan ke DOM Javascript. Semua hasil akan ditampilkan di console dan tidak memiliki tampilan di web browser.

> Namun, kebosanan itu bisa lah ya kita atasi jika sudah bener-bener niat belajar. Tidak ada kata bosan pada belajar sesuatu yang baru.

## 1️⃣ Variabel Javascript

Variabel merupakan tempat penampungan suatu data. Disebut sebagai variabel karena data tersebut bisa berubah-ubah nilai-nya dan tidak tetap. Agar dapat diakses, variabel harus diberi nama.

### 1️⃣ Membuat Variabel

Membuat sebuah variabel pada Javscript, kita membutuhkan keyword `var` atau `let`.

keyword `var` merupakan warisan lama javascript, saat ini mayoritas website sudah meninggalkan `var` dan menggunakan `let`. Mengapa `var` ditinggalkan? Penjelasannya cukup kompleks dan menyangkut <i>hoisting</i>. Mungkin kita bisa melihat perbedaan dua keyword itu ketika sudah memasuki halaman fungsi pada javascript.

Untuk saat ini, kita gunakan saja kedua keyword ini secara bersamaan. Pembuatan variabel dinamakan sebagai deklarasi variabel.

berikut contoh penerapan-nya

01-deklarasi_variabel.html
```js
var angka1;
let angka2;
```

### 2️⃣ Nilai Variabel

Setelah deklarasi variabel, selanjutnya kita isi variabel tersebut. Sebuah variabel dapat diisi dengan data apa saja asalkan penulisan data tersebut jelas.

berikut contoh penerapan-nya

02-nilai_variabel.html
```js
var angka;
angka = 192;
console.log(angka);
```

Apabila kita menjalankan kode diatas dan masuk ke console. Maka akan tampil angka `192` karena kita menggunakan fungsi `console.log()` untuk menampilkan hasil variabel-nya.

### 3️⃣ Inisialisasi Variabel

Proses deklarasi dan pemberian nilai pada sebuah variabel secara langsung biasanya disebut sebagai inisialisasi variabel. Dimana variabel di deklarasikan lalu diberi nilai langsung.

Dalam satu baris, kita dapat insialisasi beberapa variabel sekaligus. Untuk pemisahan variabel gunakan tanda kome.

berikut contoh penerapan-nya

```js
var a, b;
a = "Hello World";
b = 5;

console.log(a); // Hello World
console.log(b); // 5
```

### 4️⃣ Identifier Variabel

Penamaan variabel pada Javascript harus mengikuti aturan identifier. Identifier merupakan sebutan untuk nama dari sesuatu di dalam sebuah bahasa pemrograman.

Seperti pada contoh sebelumnya, kita beri nama sebuah variabel, hal ini disebut sebagai identifier. Aturan identifier pada javascript ada beberapa yang harus diingat.

- Boleh huruf, angka, garis bawah (`_`), dan dollar sign `$`. Selain itu tidak bisa digunakan.
- Karakter pertama identifier tidak boleh angka.
<br> Contoh : (Nama 🟢)  (1Nama 🔴)
- Bersifat case sensitive.
- Kata perintah bawaan javascript tidak boleh dijadikan nama variabel seperti : var,let,const,continue,if,else, dan lain-lain.
<br> Contoh : `var continue; 🔴`

🔴 Berikut contoh penulisan variabel yang salah :

```js
var 123abc;
var satu-dua;
var belajar javascript;
var owi&owo;
var continue;
```

🟢 Berikut contoh penulisan variabel yang benar :

```js
var budi;
var owi_owo;
var hidupOwi;
var $duit;
var _first;
```

### 5️⃣ camelCase

Terdapat kebiasaan penulisan variabel yang mayoritas programmer gunakan yaitu camelCase. Gaya penulisan ini berupa karakter pertama setiap kata ditulis dengan huruf besar, kecuali kata pertama.

> Contoh : jmlAnggota, minBox, atau rodaBerputarTigaKali.

Ini merupakan kebiasan dan kita tidak wajib mengikutinya, namun penulisan ini cukup umum digunakan. Jika kita melihat kode orang lain maka penulisan ini sering terlihat.

### 6️⃣ Variabel tanpa Deklarasi

Pada javascript, kita bisa loh membuat variabel tanpa deklarasi variabel-nya, cukup beri nama dan nilai variabel-nya sudah bisa dan work tanpa error di console.

berikut contoh penerapan-nya

04-tidak_deklarasi_variabel.html
```js
angka = 1234;
console.log(angka); // 1234

nama = "Joe Koe Wie";
console.log(nama); // Joe Koe Wie
```

Jika bisa, mengapa perlu deklarasi variabel? Meskipun bisa, hal ini tidak disarankan karena alasan mengenai bug web browser dan masalah ini berkaitan dengan variabel scope. Pembahasan pengenai variabel scope akan dibahas ketika mempelajari fungsi pada javascript.

### 7️⃣ Strict Mode

Penulisan variabel tanpa deklarasi seperti sebelumnya memang tidak disarankan dan seharusnya javascript muncul error namun tidak ada error. Inilah kelemahan sekaligus keunggulan Javascript. 

Apabila mendapati kode yang seharusnya error namun tidak error oleh javascript, cara untuk memunculkan error nya dapat menambahkan perintah `use strict` pada baris pertama javascript.

