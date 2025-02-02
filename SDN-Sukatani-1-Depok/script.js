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

function FZygoatPopupOpen() {
            document.getElementById('FZygoatPopup-modal').style.display = 'block';
            document.getElementById('FZygoatPopup-overlay').style.display = 'block';
        }

        function FZygoatPopupClose() {
            document.getElementById('FZygoatPopup-modal').style.display = 'none';
            document.getElementById('FZygoatPopup-overlay').style.display = 'none';
        }
