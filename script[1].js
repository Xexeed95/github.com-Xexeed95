// ============================================
// Shared script — used by index.html (personal page)
// and css-landing.html (CSS landing page)
// Adds a simple mobile nav toggle.
// (bootstrap-landing.html doesn't need this file —
// it uses Bootstrap's own JS bundle instead.)
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  const list = nav.querySelector("ul");
  if (!list) return;

  // Tell the CSS that JS is active, so it's safe to collapse the menu.
  document.body.classList.add("js-nav");

  // Build a toggle button and insert it before the menu list
  const toggle = document.createElement("button");
  toggle.className = "nav-toggle";
  toggle.setAttribute("aria-label", "Toggle navigation menu");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "Menu";

  nav.insertBefore(toggle, list);

  toggle.addEventListener("click", function () {
    const isOpen = list.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
