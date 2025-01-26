document.addEventListener("DOMContentLoaded", () => {
    console.log("Website TK Kartika VIII - 39 Loaded!");

    // Smooth scroll effect for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll animation effect for sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add("hidden"); // Add hidden class initially
        observer.observe(section);
    });

    // Popup functionality
    const referenceButton = document.getElementById("referenceButton");
    const popup = document.getElementById("referencePopup");
    const closePopup = document.getElementById("closePopup");

    // Show popup
    referenceButton.addEventListener("click", () => {
        popup.classList.add("visible");
    });

    // Hide popup
    closePopup.addEventListener("click", () => {
        popup.classList.remove("visible");
    });

    // Hide popup when clicking outside the content
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("visible");
        }
    });
});
