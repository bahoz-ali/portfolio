const menuButton = document.getElementById('menu');
const navList = document.getElementsByClassName('nav-list')[0];
const xButton = document.getElementsByClassName('bi-x-lg')[0];
const navItems = document.getElementsByClassName('nav__item');
const { body } = document;

function closeMobileMenu() {
  navList.classList.remove('nav--open');
  menuButton.classList.remove('menu--close');
  xButton.classList.remove('xopen');
  body.style.overflowY = 'scroll';
}

menuButton.addEventListener('click', () => {
  navList.classList.add('nav--open');
  menuButton.classList.add('menu--close');
  body.style.overflow = 'hidden';
  xButton.classList.add('xopen');
});

xButton.addEventListener('click', closeMobileMenu);

Array.from(navItems).forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});
