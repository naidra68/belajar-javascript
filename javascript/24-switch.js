// If Else If Statment
//var angka = parseInt(prompt('Masukkan angka: '));

//if ( angka === 1) {
//alert('Anda memasukkan angka 1');
//}
//else if ( angka === 2) {
//alert('Anda memasukkan angka 2');
//}
//else if ( angka === 3) {
//alert('Anda memasukkan angka 3');
//}
//else {
//alert('Angka yang anda masukkan salah!');
//}

//var angka = prompt('Masukkan angka: ');

//switch ( angka ) {
//	case "1" :
//	     alert('anda memasukkan angka 1');
//	     break;
//	case "2" :
//	     alert('anda memasukkan angka 2');
//	     break;
//	case "3" :
//	     alert('anda memasukkan angka 3');
//	     break;
//	default :
//	     alert('anda memasukkan angka yang salah');
//	     break;
//}


var item = prompt('Masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');


switch ( item ) {
	case 'nasi' :
	case 'daging' :
	case 'susu' :
		alert('makanan / minuman SEHAT!');
		break;
	case 'hamburger' :
	case 'softdrink' :
		alert('makanan / minuman TIDAK SEHAT!');
		break;
	default :
		alert('anda memasukkan nama makanan / minuman yang salah');
		break;
}

