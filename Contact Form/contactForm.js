const form = document.querySelector(".contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  const fullname = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!fullname || !email || !subject || !message) {
    formMessage.textContent = "You cannot leave any field empty!";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
});
