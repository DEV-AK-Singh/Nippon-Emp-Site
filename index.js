document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const navbarMenu = document.getElementById("navbarMenu");

  mobileMenuButton.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");

    // Change icon based on menu state
    const icon = this.querySelector("i");
    if (navbarMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when clicking on a link (for mobile)
  const navLinks = document.querySelectorAll(".navbar-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 992) {
        navbarMenu.classList.remove("active");
        mobileMenuButton.querySelector("i").classList.remove("fa-times");
        mobileMenuButton.querySelector("i").classList.add("fa-bars");
      }
    });
  });
});

// Simple animation trigger on scroll
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(
    ".benefit-card, .testimonial-card, .stat-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  animateElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
});
