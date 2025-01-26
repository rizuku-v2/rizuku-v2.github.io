document.addEventListener("DOMContentLoaded", () => {
    console.log("Website TK Kartika VIII - 39 Loaded!");

    // Form submission logic
    const form = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Display confirmation message
            formResponse.textContent = `Thank you, ${name}! Your message has been received.`;
            formResponse.style.color = "green";

            // Clear form fields
            form.reset();
        });
    }

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
});
