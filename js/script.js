'use strict';

const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu__btn');

function toggleMobileMenu() {
  header.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  const btnIcon = menuBtn.querySelector('.menu__icon');

  if (header.classList.contains('active')) {
    btnIcon.name = 'close-outline';
  } else {
    btnIcon.name = 'menu-outline';
  }
}

menuBtn.addEventListener('click', toggleMobileMenu);
