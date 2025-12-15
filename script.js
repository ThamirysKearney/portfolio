// Key elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Smooth scroll for internal links and buttons
const scrollTargets = document.querySelectorAll('a[href^="#"], button[data-scroll]');
scrollTargets.forEach((el) => {
  el.addEventListener("click", (event) => {
    const targetSelector = el.getAttribute("href") || el.getAttribute("data-scroll");
    const target = document.querySelector(targetSelector);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (navLinks) navLinks.classList.remove("open");
      if (menuToggle) menuToggle.classList.remove("open");
    }
  });
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
}

// Intersection Observer to reveal sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

