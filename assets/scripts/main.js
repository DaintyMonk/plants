const navMenu = document.querySelector('.header__nav-menu');
const links = document.querySelectorAll('.header__nav-link');
const hamb = document.querySelector('.hamburger');
const cards = document.querySelectorAll('.service__card');
const accordions = document.querySelectorAll('.prices__accordion');
const pricesAccordionBlock = document.querySelector('.prices__accordion-block');
const select = document.querySelector('.contacts__select');
const addressCards = document.querySelectorAll('.contacts__address-card');

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
  const activeButton = document.querySelector('.btn_active');
  if (activeButton != null) {
    activeButton.classList.toggle('btn_active');
  }
  btn.classList.toggle('btn_active');

  const activeCards = document.querySelectorAll('.card_active');
  activeCards.forEach(card => {
    card.classList.toggle('card_active');
  });

  const unblurTarget = btn.innerHTML.slice(0,4);
  cards.forEach(card => {
    const cardType = card.querySelector('.card__img-text').innerHTML; 
    if (cardType.includes(unblurTarget)){
      card.classList.toggle('card_active');
    }
  })
}

// Accordion
accordions.forEach(accordion => {
  accordion.querySelector('.accordion__items').addEventListener('click', () => {
    accordion.classList.toggle('accordion_active');

    const activeAccordions = document.querySelectorAll('.accordion_active');
    if (!pricesAccordionBlock.classList.contains('accordion-block_active') && activeAccordions != 0) {
      pricesAccordionBlock.classList.add('accordion-block_active');
    }
    else if (activeAccordions.length === 0) {
      pricesAccordionBlock.classList.remove('accordion-block_active');
    }
  })
})

// Custom select
select.querySelector('.select__input').addEventListener('click', () => {
  const addressActive = document.querySelector('.address-card_active');

  if (addressActive != null) {
    addressActive.classList.remove('address-card_active');
  } 

  select.classList.toggle('select_active');

  if (!select.classList.contains('select_active')) {
    const selectText = select.querySelector('.select__text').innerText;
    if (selectText != 'City') {
      document.getElementById(selectText).classList.add('address-card_active');
    }
  }
})

// Address selection
select.querySelectorAll('.select__dropdown-item').forEach(selectItem => {
  selectItem.addEventListener('click', () => {
    select.querySelector('.select__text').innerText = selectItem.innerText;

    select.classList.remove('select_active');
  
    const selectCity = selectItem.getAttribute('data-value');
    document.getElementById(selectCity).classList.add('address-card_active');
  })
})

