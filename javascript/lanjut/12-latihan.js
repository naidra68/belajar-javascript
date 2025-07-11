// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));



// pilih hanya yang "JAVASCRIPT LANJUTAN"
const jsLanjut = 
videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video
    // .map(item => item.dataset.duration)
    .map(item => item.getAttribute('data-duration'))

// ubah durasi menjadi float, ubah menit menjadi detik.
    .map(waktu => {
        // 10:30 -> [10,30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })


// Jumlahkan semua detik-nya.
    .reduce((total, detik) => total + detik);


// ubah format menjadi jam menit detik.
const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor((jsLanjut % 3600) / 60);
// const detik = jsLanjut - menit * 60;
const detik = ((jsLanjut % 3600) % 60);

// simpan di DOM.

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(jmlVideo);