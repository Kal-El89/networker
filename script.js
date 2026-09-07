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

  // მობილურ ვერსიაში სერვისების დროფდაუნის მართვა (რომ თავიდან არ იყოს გაშლილი და არ დახუროს ბურგერ მენიუ)
  const megaMenuParent = document.querySelector(".has-mega-menu");
  if (megaMenuParent) {
    const serviceToggleLink = megaMenuParent.querySelector(
      ".services-toggle-link",
    );
    if (serviceToggleLink) {
      serviceToggleLink.addEventListener("click", function (e) {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          e.stopPropagation(); // აჩერებს მოვლენის ზემოთ ასვლას, რომ ბურგერ მენიუ არ დაიხუროს
          megaMenuParent.classList.toggle("mobile-open");
        }
      });
    }
  }

  // ენების გადართვის გლუვი ეფექტი
  const langPills = document.querySelectorAll(".lang-pill");
  langPills.forEach((pill) => {
    pill.addEventListener("click", function (e) {
      if (this.classList.contains("active")) return;
      e.preventDefault();
      const targetUrl = this.getAttribute("href");

      langPills.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 200);
    });
  });

  // სმუზ სქროლი (Smooth scrolling) ყველა შიდა ლინკისთვის და მთავარზე დასაბრუნებლად
  document
    .querySelectorAll('.smooth-scroll, a[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        // თუ ეს არის დროფდაუნის ტოგლერი მობილურში, არ ვხურავთ მენიუს და არ ვასრულებთ სქროლს
        if (
          window.innerWidth <= 992 &&
          this.classList.contains("services-toggle-link")
        ) {
          return;
        }

        if (
          targetId === "#" ||
          targetId === "" ||
          this.classList.contains("brand-logo-link")
        ) {
          e.preventDefault();
          if (mainNav.classList.contains("active")) {
            mainNav.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            if (icon) {
              icon.classList.remove("fa-times");
              icon.classList.add("fa-bars");
            }
          }
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          return;
        }

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
