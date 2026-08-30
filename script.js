document.addEventListener("DOMContentLoaded", () => {
  // მობილური მენიუს გახსნა/დახურვა
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (mainNav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  }

  // გლუვი სქროლი (Smooth Scroll) ნავიგაციის ლინკებისთვის
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        // თუ მობილური მენიუ ღიაა, დავხუროთ ლინკზე კლიკისას
        if (mainNav.classList.contains("active")) {
          mainNav.classList.remove("active");
          const icon = mobileToggle.querySelector("i");
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
