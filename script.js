// Mobile navigation toggle
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after tapping a link (mobile)
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Clicking the logo scrolls back to the very top.
// (The #top anchor lives on the sticky header, which is always in view,
// so the browser won't scroll to it on its own.)
const brand = document.querySelector(".nav__brand");
if (brand) {
  brand.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
