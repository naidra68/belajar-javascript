// Tagged Templates

// const nama = 'Tri Ardian';
// const umur = 33;

// function coba(strings, ...values) {

//     // Manual dengan forEach

//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     // Menggunakan method reduce

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// Studi Kasua sederhana

// const nama = 'Tri Ardian';
// const umur = 33;
// const email = 'ardian.crazy@gmail.com';

// function highlight(strings, ...values) {
    
//     return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
// }

// const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}.`;

// document.body.innerHTML = str;



// escaping / sanitize HTML Tags


// function sanitize(strings, ...values) {
//     return DOMPurify.sanitize(aboutMe);
// }

// const name = 'Tri Ardian';
// const aboutMe = `What's a beautiful day <img src="https://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');" />`;

// const html = sanitize`
// <h3>${name}</h3>
// <p>${aboutMe}</p>`;



// translation & Internationalization


// https://github.com/skolmer/es2015-i18n-tag?tab=readme-ov-file#installation

// const html = i18n`Hello ${name}, you have ${amount}:c in your bank account.`;