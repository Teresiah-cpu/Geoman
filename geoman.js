document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent page reload
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    document.getElementById("contact-form").reset();  // Clear form
});

function inquire() {
    alert("Thank you for your interest! We will contact you soon.");
}
