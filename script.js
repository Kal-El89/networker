document.addEventListener("DOMContentLoaded", () => {
  // 1. მობილურის მენიუს გახსნა/დახურვა
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });
  }

  // 2. მობილურზე Mega Menu-ს გახსნა დაჭერისას
  const megaMenuItem = document.querySelector(".has-mega-menu");
  if (megaMenuItem) {
    megaMenuItem.addEventListener("click", (e) => {
      if (window.innerWidth <= 992) {
        megaMenuItem.classList.toggle("open");
      }
    });
  }
});
