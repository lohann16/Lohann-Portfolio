// Initialize EmailJS
(function() {
  emailjs.init("TRaPw2tLKLE-JXszH"); // Replace with your actual public key
})();

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_gg7l28a", "template_dh2f02d", this)
    .then(() => {
      message.classList.remove("hidden");
      form.reset();
      setTimeout(() => {
        message.classList.add("hidden");
      }, 5000);
    }, (error) => {
      alert("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    });
});