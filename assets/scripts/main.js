const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});