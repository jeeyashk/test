/*
  SUPS School Website JavaScript
  This file handles:
  1. Mobile navbar toggle
  2. Simple scroll animations
  3. Demo form submission message
*/

// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("show");

      // Change menu icon based on menu state
      if (navbar.classList.contains("show")) {
        menuToggle.textContent = "✕";
      } else {
        menuToggle.textContent = "☰";
      }
    });
  }

  // Close mobile menu when any nav link is clicked
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbar && navbar.classList.contains("show")) {
        navbar.classList.remove("show");
        menuToggle.textContent = "☰";
      }
    });
  });

  // Scroll animation using Intersection Observer
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedElements.forEach(function (element) {
    observer.observe(element);
  });

  // Demo form submission handler
  // Since this is a static website, forms do not send data to a backend.
  const forms = document.querySelectorAll("form");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Thank you! This is a demo form. Backend is not connected yet.");

      form.reset();
    });
  });
});
