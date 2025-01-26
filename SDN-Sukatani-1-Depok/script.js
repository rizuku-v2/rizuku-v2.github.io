// File: script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Modern Website Loaded!");

    // Ambil elemen <p> yang memiliki id 'footer-copyright'
    const copyrightElement = document.getElementById('footer-copyright');
    
    // Dapatkan tahun saat ini
    const currentYear = new Date().getFullYear();
    
    // Ubah konten teks elemen tersebut dengan tahun otomatis
    copyrightElement.innerHTML = `&copy; ${currentYear} SDN Sukatani 1. All rights reserved.`;
});
