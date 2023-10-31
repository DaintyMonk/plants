const hamb = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav-menu");

hamb.addEventListener("click", () => {
  hamb.classList.toggle("active");
  navMenu.classList.toggle("active");
});