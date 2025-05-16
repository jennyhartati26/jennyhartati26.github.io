document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu untuk hamburger dengan animasi
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("toggle");
    });

    // Tutup menu saat link diklik
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            hamburger.classList.remove("toggle");
        });
    });

    // Smooth scrolling dengan efek fade-in
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
                
                targetElement.classList.add("fade-in");
                setTimeout(() => {
                    targetElement.classList.remove("fade-in");
                }, 1000);
            }
        });
    });

    // Tambah efek animasi saat scroll
    const sections = document.querySelectorAll("section, .footer, .bottom");

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    // Efek teks ketik otomatis
    const textElement = document.querySelector(".subtitle");
    const text = "Hello, my name is Jenny";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    
    textElement.textContent = ""; // Reset teks
    typeEffect();

    window.addEventListener("load", function () {
        const cookieConsent = document.getElementById("cookieConsent");
        const cookieSettings = document.getElementById("cookieSettings");
      
        // Tampilkan popup saat halaman dibuka
        cookieConsent.style.display = "block";
      
        // Tombol Terima Semua
        document.getElementById("acceptAll").addEventListener("click", function () {
          cookieConsent.style.display = "none";
        });
      
        // Tombol Tolak Non-Essensial
        document.getElementById("rejectNonEssential").addEventListener("click", function () {
          cookieConsent.style.display = "none";
        });
      
        // Tombol "Pengaturan"
        document.getElementById("openSettings").addEventListener("click", function () {
          cookieSettings.style.display = "block";
        });
      
        // Tombol "Simpan Preferensi"
        document.getElementById("saveSettings").addEventListener("click", function () {
          cookieSettings.style.display = "none";
          cookieConsent.style.display = "none";
        });
      });
      