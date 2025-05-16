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
        textElement.textContent = "";
        typeEffect();
    }

    // ✅ COOKIE POPUP LOGIC
    const cookieConsent = document.getElementById("cookieConsent");
    const cookieSettings = document.getElementById("cookieSettings");

    if (cookieConsent) {
        cookieConsent.style.display = "block";

        document.getElementById("acceptAll").addEventListener("click", function () {
            cookieConsent.style.display = "none";
        });

        document.getElementById("rejectNonEssential").addEventListener("click", function () {
            cookieConsent.style.display = "none";
        });

        document.getElementById("openSettings").addEventListener("click", function () {
            cookieSettings.style.display = "block";
        });

        document.getElementById("saveSettings").addEventListener("click", function () {
            cookieSettings.style.display = "none";
            cookieConsent.style.display = "none";
        });
    }
});
