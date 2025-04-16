import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

AOS.init();

const swiper = new Swiper('.swiper', {
  spaceBetween: 12,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  pagination: {
    el: '.swiper-pagination1',
  },

  breakpoints: {
    960: {
      spaceBetween: 24,
    },
  },
});

document.querySelectorAll('a[data-target]').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('data-target');
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

let menu = document.querySelector('.js-menu-container');
let menuOpenBtn = document.querySelector('.js-menu-open');
let menuCloseBtn = document.querySelector('.js-menu-close');

menuOpenBtn.addEventListener('click', () => {
  menu.classList.remove('-translate-y-full');
});

menuCloseBtn.addEventListener('click', () => {
  menu.classList.add('-translate-y-full');
});

let modal = document.querySelector('.js-modal');
let modalBtns = document.querySelectorAll('.js-modal-btn');
let modalClose = document.querySelector('.js-modal-close');
let modalContent = document.querySelector('.js-modal-content');
const body = document.body;
const html = document.documentElement;

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('md:flex');
    body.classList.add('overflow-hidden');
    html.classList.add('overflow-hidden');
  });
}

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('md:flex');
  body.classList.remove('overflow-hidden');
  html.classList.remove('overflow-hidden');
});

modal.addEventListener('click', function (e) {
  modal.classList.add('hidden');
  modal.classList.remove('md:flex');
  body.classList.remove('overflow-hidden');
  html.classList.remove('overflow-hidden');
});

modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

let phoneInput = document.querySelector('.js-phone');

phoneInput.addEventListener('focus', () => {
  if (phoneInput.value < 1) {
    phoneInput.value = '+7 (';
  }
});

phoneInput.addEventListener('blur', () => {
  if (phoneInput.value <= 4) {
    phoneInput.value = '';
  }
});

phoneInput.addEventListener('input', () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, '');
  const input = phoneInput.value.substring(0, 11);
  const areaCode = input.substring(0, 1);
  const operatorCode = input.substring(1, 4);
  const first = input.substring(4, 7);
  const middle = input.substring(7, 9);
  1;
  const last = input.substring(9, 11);

  if (input.length > 9) {
    phoneInput.value = `+7 (${operatorCode}) ${first}-${middle}-${last}`;
  } else if (input.length > 7) {
    phoneInput.value = `+7 (${operatorCode}) ${first}-${middle}`;
  } else if (input.length > 4) {
    phoneInput.value = `+7 (${operatorCode}) ${first}`;
  } else if (input.length > 1) {
    phoneInput.value = `+7 (${operatorCode}`;
  } else if (input.length > 0) {
    phoneInput.value = `+7 (`;
  }
});

let form = document.querySelector('.js-form');

form.addEventListener('submit', function (e) {
  if (phoneInput.value.length !== 18) {
    e.preventDefault();
    alert('Введите полный номер телефона');
  }
});

let accordions = document.querySelectorAll('.js-acc-container');
let accordionIcons = document.querySelectorAll('.js-acc-icon');
let accordionTexts = document.querySelectorAll('.js-acc-text');

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', () => {
    if (accordionTexts[i].style.maxHeight) {
      accordionTexts[i].style.maxHeight = null;
      accordionIcons[i].classList.remove('rotate-135');
    } else {
      accordionTexts[i].style.maxHeight = accordionTexts[i].scrollHeight + 'px';
      accordionIcons[i].classList.add('rotate-135');
    }
  });
}
