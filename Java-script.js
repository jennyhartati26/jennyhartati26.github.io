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

    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 86400000).toUTCString();
        document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    }
    
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    
    const popup = document.getElementById("cookieConsent");
    const settings = document.getElementById("cookieSettings");
    const acceptBtn = document.getElementById("acceptAll");
    const rejectBtn = document.getElementById("rejectNonEssential");
    const settingsBtn = document.getElementById("openSettings");
    const saveBtn = document.getElementById("saveSettings");
    
    if (!getCookie("cookieConsent")) {
        popup.classList.add("show");
    }
    
    acceptBtn.addEventListener("click", () => {
        setCookie("cookieConsent", "all", 30);
        popup.style.display = "none";
    });
    
    rejectBtn.addEventListener("click", () => {
        setCookie("cookieConsent", "essential", 30);
        popup.style.display = "none";
    });
    
    settingsBtn.addEventListener("click", () => {
        settings.style.display = "flex";
    });
    
    saveBtn.addEventListener("click", () => {
        const analytics = document.getElementById("analyticsCookie").checked;
        const ads = document.getElementById("adsCookie").checked;
    
        const preference = {
            analytics: analytics,
            ads: ads
        };
    
        setCookie("cookieConsent", JSON.stringify(preference), 30);
        settings.style.display = "none";
        popup.style.display = "none";
    });
    
});
