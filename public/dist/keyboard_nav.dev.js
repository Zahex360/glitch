"use strict";

var navLinks = document.querySelectorAll("a");
navLinks.forEach(function (link) {
  link.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") link.click();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var helpPopup = document.getElementById("help-popup");

  if (!function () {
    return window.innerWidth <= 768;
  }()) {
    (function () {
      helpPopup.style.display = "block";
      setTimeout(function () {
        helpPopup.style.display = "none";
      }, 5000);
    })();
  }
});