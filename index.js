const menuButton = document.getElementById('menu');
const navList = document.getElementsByClassName('nav-list')[0];
const xButton = document.getElementsByClassName('bi-x-lg')[0];
const navItems = document.getElementsByClassName('nav__item');
const { body } = document;
const hero = document.getElementsByClassName('hero')[0];
const logo = document.getElementsByClassName('logo')[0];
const card1 = document.getElementById('card1');
const overlay = document.getElementsByClassName('overlay')[0];

function blur(number) {
  hero.style.filter = `blur(${number}px)`;
  logo.style.filter = `blur(${number}px)`;
}

function closeMobileMenu() {
  blur(0);
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
  blur(7);
});

xButton.addEventListener('click', closeMobileMenu);

Array.from(navItems).forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});

function openOverlay() {
  console.log('open overlay');
  overlay.classList.add('overlay--active');
}

card1.addEventListener('click', openOverlay);
