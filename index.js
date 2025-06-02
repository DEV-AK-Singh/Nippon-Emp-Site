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

  // Modal functionality
  const modalTriggers = {
    talkToExpertBtn: "talkToExpertModal",
    shareCardBtn: "talkToExpertModal",
    joinTeamBtn: "joinTeamModal",
    joinTeamBtn2: "joinTeamModal",
    productExpertBtn: "talkToExpertModal",
    chatbotBtn: "chatbotModal",
    showProductsBtn: "talkToExpertModal",
    callBackBtn: "talkToExpertModal",
    whatsappBtn: "talkToExpertModal",
  };

  // Set up all modal triggers
  Object.keys(modalTriggers).forEach((triggerId) => {
    const btn = document.getElementById(triggerId);
    if (btn) {
      btn.addEventListener("click", () => {
        document.getElementById(modalTriggers[triggerId]).style.display =
          "flex";
      });
    }
  });

  // Close modals when clicking X
  document.querySelectorAll(".close-modal").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      this.closest(".modal").style.display = "none";
    });
  });

  // Close modals when clicking outside
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
      }
    });
  });

  // Form submissions
  document
    .getElementById("expertForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Our expert will contact you shortly.");
      this.reset();
      document.getElementById("talkToExpertModal").style.display = "none";
    });

  document
    .getElementById("joinTeamForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Thank you for your interest! We will get back to you about joining our team."
      );
      this.reset();
      document.getElementById("joinTeamModal").style.display = "none";
    });

  // Show welcome modal on page load
  window.addEventListener("load", function () {
    setTimeout(() => {
      document.getElementById("talkToExpertModal").style.display = "flex";
    }, 1000);
  });

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
