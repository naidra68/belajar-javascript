# Konstanta

Konstanta merupakah variabel yang nilai nya tidak dapat diubah sepanjang kode program. Bila Variabel dapat diubah nilai-nya, maka konstanta ini tidak bisa diubah nilai-nya.

Sebagai contoh, kita buat varibel dengan nilai 30 dan dibawahnya kita ubah nilai variabel yang semula 30 menjadi 40. 

berikut contoh penerapan-nya

01-variabel.html

```js
var nilai = 30;
var nilai = 40;
console.log(nilai);
```

Jika kode tersebut dijalankan, berapa nilai-nya? apakah 30? apakah 40? Karena variabel dapat diubah, maka nilai-nya adalah `40`. Karena `var nilai = 30;` kita timpa menjadi `var nilai = 40;`.

Hal tersebut tidak bisa jika variabel dideklarasikan dengan konstanta.

berikut contoh penerapan-nya

02-konstanta.html

```js
const PI = 3.14;
const hidup = "HIDUP [insert text here]";

console.log(PI); // 3.14
console.log(hidup) // HIDUP [insert text here]
```

Jika dijalankan, kode ebrjalan dengan aman dan tidak error karena memang harusnya seperti ini. Apabila kita timpa nilai dari `const PI` dengan nilai lain, maka hal itu menyebabkan error.

berikut contoh penerapan-nya

```js
const PI = 3.14;
const hidup = "HIDUP [insert text here]";
const PI = 4.14;

console.log(PI); // Uncaught SyntaxError: Identifier 'PI' has already been declared
console.log(hidup) // HIDUP [insert text here]
```

Pada program yang lebih kompleks, konstanta sangat diperlukan untuk membuat data supaya tidak dapat ditimpa atau diubah.

