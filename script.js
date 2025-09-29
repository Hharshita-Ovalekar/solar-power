// Toggle Navbar for Mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact Form Submission (Demo)
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! We will get back to you soon.");
  this.reset();
});

