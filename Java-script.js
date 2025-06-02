document.addEventListener("DOMContentLoaded", function () {
    // Welcome popup message with localStorage tracking
    const welcomePopup = document.getElementById("welcomePopup");
    const closePopup = document.getElementById("closePopup");

    // Check if this is the user's first visit
    if (!localStorage.getItem('hasSeenWelcome')) {
        setTimeout(function() {
            welcomePopup.style.display = "flex";
        }, 1000);
    }

    closePopup.addEventListener("click", function() {
        welcomePopup.style.display = "none";
        // Set flag in localStorage that user has seen the popup
        localStorage.setItem('hasSeenWelcome', 'true');
    });

    // Close popup when clicking outside
    welcomePopup.addEventListener("click", function(e) {
        if (e.target === welcomePopup) {
            welcomePopup.style.display = "none";
            // Set flag in localStorage that user has seen the popup
            localStorage.setItem('hasSeenWelcome', 'true');
        }
    });

    // 🔹 Toggle menu hamburger
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

    // 🔹 Smooth scroll + fade-in
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

    // 🔹 Scroll animation
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

    // 🔹 Efek ketik otomatis
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

    // 🔹 COOKIE POPUP LOGIC
    const cookieConsent = document.getElementById("cookieConsent");
    // const cookieSettings = document.getElementById("cookieSettings");
    const btnAccept = document.getElementById("acceptAll");
    const btnReject = document.getElementById("rejectNonEssential");
    const btnSettings = document.getElementById("openSettings");
    const btnSave = document.getElementById("saveSettings");

    // Fungsi bantu ambil cookie
    function getCookie(name) {
      return localStorage.getItem(name);
    }

    // ✅ Tampilkan popup hanya jika belum setuju/tolak
    if (!getCookie("cookieConsentShow")) {
        cookieConsent.style.display = "block";
    }

    // 🔘 Klik "Terima"
    btnAccept.addEventListener("click", function () {
        document.cookie = "cookieConsent=accepted; max-age=31536000; path=/";
        cookieConsent.style.display = "none";
        localStorage.setItem("cookieConsentShow", "true");
        localStorage.setItem("cookieConsentStatus", "accepted");
    });

    // 🔘 Klik "Tolak"
    btnReject.addEventListener("click", function () {
        document.cookie = "cookieConsent=rejected; max-age=31536000; path=/";
        cookieConsent.style.display = "none";
        localStorage.setItem("cookieConsentShow", "true");
        localStorage.setItem("cookieConsentStatus", "rejected");
    });

    // ⚙️ Klik "Pengaturan"
    // btnSettings.addEventListener("click", function () {
    //     cookieConsent.style.display = "none";
    //     cookieSettings.style.display = "block";
    // });

    // 💾 Klik "Simpan Preferensi"
    // btnSave.addEventListener("click", function () {
    //     const analytics = document.querySelectorAll("#cookieSettings input")[1].checked;
    //     const ads = document.querySelectorAll("#cookieSettings input")[2].checked;

    //     localStorage.setItem("cookieAnalytics", analytics);
    //     localStorage.setItem("cookieAds", ads);
    //     document.cookie = "cookieConsent=custom; max-age=31536000; path=/";

    //     cookieSettings.style.display = "none";
    // });

});
