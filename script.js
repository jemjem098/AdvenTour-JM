const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
  document
    .getElementById("packages")
    .scrollIntoView({ behavior: "smooth" });
});

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Your travel package has been booked!");
  });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
  contactForm.reset();
});