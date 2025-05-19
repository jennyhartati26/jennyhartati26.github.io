document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu hamburger
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("toggle");
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            hamburger.classList.remove("toggle");
        });
    });

    // Smooth scroll + fade-in
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

    // Scroll animasi
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

    // Efek ketik otomatis
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

    if (textElement) {
        textElement.textContent = ""; // Kosongkan dulu
        typeEffect();
    }

    // COOKIE POPUP LOGIC
    const cookieConsent = document.getElementById("cookieConsent");
    const cookieSettings = document.getElementById("cookieSettings");
    const btnAccept = document.getElementById("acceptAll");
    const btnReject = document.getElementById("rejectNonEssential");
    const btnSettings = document.getElementById("openSettings");
    const btnSave = document.getElementById("saveSettings");

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    // Tampilkan pop-up hanya jika belum ada cookie consent
    if (!getCookie("cookieConsent")) {
        cookieConsent.style.display = "block";
    }

    // Klik "Terima"
    btnAccept.addEventListener("click", function () {
        document.cookie = "cookieConsent=accepted; max-age=31536000; path=/";
        cookieConsent.style.display = "none";
    });

    // Klik "Tolak"
    btnReject.addEventListener("click", function () {
        document.cookie = "cookieConsent=rejected; max-age=31536000; path=/";
        cookieConsent.style.display = "none";
    });

    // Klik tombol pengaturan
    btnSettings.addEventListener("click", function () {
        cookieConsent.style.display = "none";
        cookieSettings.style.display = "block";
    });

    // Klik Simpan Preferensi
    btnSave.addEventListener("click", function () {
        const analytics = document.querySelectorAll("#cookieSettings input")[1].checked;
        const ads = document.querySelectorAll("#cookieSettings input")[2].checked;

        localStorage.setItem("cookieAnalytics", analytics);
        localStorage.setItem("cookieAds", ads);
        document.cookie = "cookieConsent=custom; max-age=31536000; path=/";

        cookieSettings.style.display = "none";
    });
});
