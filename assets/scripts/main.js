const navMenu = document.querySelector('.header__nav-menu');
const links = document.querySelectorAll('.header__nav-link');
const hamb = document.querySelector('.hamburger');
const cards = document.querySelectorAll('.service__card');
const accordions = document.querySelectorAll('.prices__accordion');
const pricesAccordionBlock = document.querySelector('.prices__accordion-block');

// Smooth scrolling
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
  
    const headerOffsetHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffsetHeight;
  
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    })
  })
})

// Hamburger menu
hamb.addEventListener('click', () => {
  hamb.classList.toggle('hamburger_active');
  navMenu.classList.toggle('hamburger_active');
});

// Card blur effect
const focusChange = (btn) => {
  const unblurTarget = btn.innerHTML.slice(0,4);
  const activeButton = document.querySelector('.btn_active');
  if (activeButton != null) {
    activeButton.classList.toggle('btn_active');
  }
  btn.classList.toggle('btn_active');
  const activeCards = document.querySelectorAll('.card_active');
  activeCards.forEach(card => {
    card.classList.toggle('card_active');
  });
  cards.forEach(card => {
    const cardType = card.querySelector('.card__img-text').innerHTML; 
    if (cardType.includes(unblurTarget)){
      card.classList.toggle('card_active');
    }
  });
}

accordions.forEach(accordion => {
  accordion.querySelector('.accordion__items').addEventListener('click', () => {
    accordion.classList.toggle('accordion_active');
    const activeAccordions = document.querySelectorAll('.accordion_active');
    console.log(activeAccordions);
    if (!pricesAccordionBlock.classList.contains('accordion-block_active') && activeAccordions != 0) {
      pricesAccordionBlock.classList.toggle('accordion-block_active');
    }
    else if (activeAccordions.length === 0) {
      pricesAccordionBlock.classList.toggle('accordion-block_active');
    }
  })
})

