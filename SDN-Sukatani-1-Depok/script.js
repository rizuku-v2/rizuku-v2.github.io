// File: script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Modern Website Loaded!");

    // Form submission logic
    const form = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

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
});

function openPopup() {
            document.getElementById('popup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

        function closePopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }
