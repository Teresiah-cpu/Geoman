document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav a").forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        }
    });

    // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    const highlightActiveLink = () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href").substring(1) === currentSectionId);
        });
    };

    window.addEventListener("scroll", highlightActiveLink);
    highlightActiveLink();

    // Scroll-to-Top Button
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.textContent = "↑ Top";
    scrollTopBtn.className = "scroll-top-btn";
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        font-size: 16px;
        background: #009688;
        color: #fff;
        border: none;
        border-radius: 5px;
        display: none;
        cursor: pointer;
        z-index: 999;
    `;
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const toggleScrollTopBtn = () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };

    window.addEventListener("scroll", toggleScrollTopBtn);
    toggleScrollTopBtn();

    // Fade-in animation for sections
    const fadeInOptions = {
        threshold: 0.3
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, fadeInOptions);

    document.querySelectorAll("section").forEach(section => {
        section.classList.add("fade-in");
        fadeInObserver.observe(section);
    });

    // Read more toggle for About Us section
    const aboutSection = document.querySelector(".about-us-section");
    if (aboutSection) {
        const originalText = aboutSection.querySelector("p").textContent;
        const shortText = originalText.substring(0, 150) + "...";

        const paragraph = aboutSection.querySelector("p");
        const button = document.createElement("button");
        button.textContent = "Read More";
        button.className = "read-more-btn";

        let expanded = false;
        paragraph.textContent = shortText;
        paragraph.after(button);

        button.addEventListener("click", () => {
            if (expanded) {
                paragraph.textContent = shortText;
                button.textContent = "Read More";
            } else {
                paragraph.textContent = originalText;
                button.textContent = "Read Less";
            }
            expanded = !expanded;
        });
    }

    // Optional: Mobile nav toggle (basic example if you later add a menu button)
    const menuToggleBtn = document.getElementById("mobile-menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggleBtn && navMenu) {
        menuToggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }
});


// geoman.js
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const navList = document.querySelector("nav ul");
  
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  });
  