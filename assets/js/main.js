const navToggleBtn = document.getElementById("navToggle"),
  navMenu = document.getElementById("navMenu"),
  navCloseBtn = document.getElementById("navClose");

navToggleBtn.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--show");
});

navCloseBtn.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--show");
});
