const navMenu = document.querySelector('.header__nav-menu');
const links = document.querySelectorAll('.header__nav-link');
const hamb = document.querySelector('.hamburger');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = document.querySelector('.header').offsetHeight;

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    })
  })
})

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  navMenu.classList.toggle('active');
});
