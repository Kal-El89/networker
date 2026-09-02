document.addEventListener("DOMContentLoaded", () => {
  // მობილური მენიუს თაიგლი (Toggle)
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (mainNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // ენების გადართვის გლუვი და პლავური ეფექტი (ეკრანის გათეთრების გარეშე)
  const langPills = document.querySelectorAll(".lang-pill");
  langPills.forEach(pill => {
    pill.addEventListener("click", function(e) {
      if (this.classList.contains("active")) return;
      e.preventDefault();
      const targetUrl = this.getAttribute("href");

      // აქტიური კლასის გლუვი გადატანა და ანიმაცია
      langPills.forEach(p => p.classList.remove("active"));
      this.classList.add("active");

      // მცირე შეყოვნება (200მწმ) პლავური განათების გამოსაჩენად და შემდეგ გადასვლა
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 200);
    });
  });

  // სმუზ სქროლი (Smooth scrolling) შიდა ლინკებისთვის
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        if (mainNav.classList.contains("active")) {
          mainNav.classList.remove("active");
          const icon = menuToggle.querySelector("i");
          if (icon) {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
          }
        }
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});