// HTML Fragments

// const mhs = {
//     nama : 'Tri Ardian',
//     umur: 33,
//     nim: '202051026',
//     email: '202051026@umk.ac.id'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;


// 2. Looping

// const mhs = [
//     {
//         nama: 'Tri Ardian',
//         email: '202051026@std.umk.ac.id'
//     },
//     {
//         nama: 'Eko Purniawan',
//         email: '2017321@std.umk.ac.id'
//     },
//     {
//         nama: 'Pur Sadono',
//         email: '2017123@std.umk.ac.id'
//     },

// ];

// const el = `<div class="mhs">

//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//         </ul>`).join('')}

// </div>`;


// 3. Pengkondisian
// ternary

// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;


// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'Tri Ardian',
    semester: 5,
    mataKuliah: ['Rekayasa Web', 'Analisis dan Perancangan Sistem informasi', 'Pemrograman Sistem Interaktif', 'Perancangan Sistem Berorientasi Object']
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs"></div>
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
`


document.body.innerHTML = el;