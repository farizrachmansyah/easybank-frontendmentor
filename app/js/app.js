const body = document.querySelector('body');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('#btn-hamburger');
const overlay = document.querySelector('.overlay');
const overlayMenu = document.querySelector('.header__menu');
const overlayMenuItem = document.querySelectorAll('.header__menu a');

menuBtn.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    overlayMenuItem.forEach(menu => {
      menu.classList.remove('overlay-menu-open');
    });

    setTimeout(() => {
      overlayMenu.style.opacity = '0';
      overlayMenu.style.visibility = 'hidden';
      header.classList.remove('open');
      overlay.style.height = '0';
      body.classList.remove('noscroll');
    }, 1500);
  } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    overlay.style.height = '100vh';
    overlayMenu.style.visibility = 'visible';

    setTimeout(() => {
      overlayMenu.style.opacity = '1';
      overlayMenuItem.forEach(menu => {
        menu.classList.add('overlay-menu-open');
      });
    }, 100);
  }
});