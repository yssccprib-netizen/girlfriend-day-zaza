// Ambil elemen tombol dan halaman
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionBox = document.querySelector('.question-box');
const resultMessage = document.getElementById('resultMessage');

// --- FUNGSI NAVIGASI ANTAR HALAMAN ---
function showPage(pageId) {
    // 1. Sembunyikan semua halaman (section dengan class .page)
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    // 2. Tampilkan halaman yang diminta
    document.getElementById(pageId).classList.remove('hidden');
}


// Pesan-pesan ejekan untuk tombol NO
const noMessages = [
    "Gabisa di klik, percuma! 😝",
    "Pilih yang bener dong! ❤️",
    "Aku gabisa diklik! Jangan coba-coba! 🙅‍♀️",
    "Capek deh, mending YES aja! 🤣",
    "Gak akan kena! Coba lagi! 😉"
];

// --- LOGIKA TOMBOL TIDAK (KABUR-KABURAN) ---
noBtn.addEventListener('mouseover', () => {
    // Tombol akan kabur ke posisi acak
    const containerRect = questionBox.getBoundingClientRect();
    const maxX = 300; 
    const maxY = 300; 
    
    const randomX = Math.floor(Math.random() * (maxX * 2 + 1)) - maxX;
    const randomY = Math.floor(Math.random() * (maxY * 2 + 1)) - maxY;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Tampilkan pesan ejekan
    const randomIndex = Math.floor(Math.random() * noMessages.length);
    alert(noMessages[randomIndex]);
});

noBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * noMessages.length);
    alert("Aku sudah bilang kan? Aku gabisa diklik! 😜 " + noMessages[randomIndex]);
});


// --- LOGIKA TOMBOL YA (PINDAH KE HALAMAN HISTORY) ---
yesBtn.addEventListener('click', () => {
    // 1. Sembunyikan kotak pertanyaan
    questionBox.classList.add('hidden');
    
    // 2. Tampilkan pesan 'YES'
    resultMessage.classList.remove('hidden');
    resultMessage.innerHTML = `
        <p>🎉 YESS! Aku sudah tahu jawabannya pasti YA! 🎉</p>
        <p>Jawabanmu membuatku senang! Sekarang, mari kita lihat sejarah kita...</p>
    `;
    
    // 3. Setelah jeda 3 detik, pindah ke halaman history (Page 2)
    setTimeout(() => {
        showPage('page-history');
    }, 3000); 

    // Nonaktifkan event mouseover untuk tombol NO
    noBtn.removeEventListener('mouseover', noBtn.click);
});
