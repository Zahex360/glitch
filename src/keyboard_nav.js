const navLinks = document.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") link.click();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const helpPopup = document.getElementById("help-popup");
  if (!(() => window.innerWidth <= 768)()) {
    (() => {
      helpPopup.style.display = "block";
      setTimeout(() => {
        helpPopup.style.display = "none";
      }, 5000);
    })();
  }
});
