const navToggleBtn = document.getElementById("navToggle"),
  navMenu = document.getElementById("navMenu"),
  navCloseBtn = document.getElementById("navClose");

if (navToggleBtn) {
  navToggleBtn.addEventListener("click", () => {
    navMenu.classList.add("nav__menu--show");
  });
}

if (navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--show");
  });
}
