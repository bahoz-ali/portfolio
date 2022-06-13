const menuButton = document.getElementById("menu");
const nav_list = document.getElementsByClassName("nav-list")[0];
const xButton = document.getElementsByClassName("bi-x-lg")[0];
const navItems = document.getElementsByClassName("nav__item");
const body = document.body;

menuButton.addEventListener("click", (event) => {
  nav_list.classList.add("nav--open");
  menuButton.classList.add("menu--close");
  body.style.overflow = "hidden";
  xButton.classList.add("xopen");
});

xButton.addEventListener("click", closeMobileMenu);

for (const item of navItems) {
  item.addEventListener("click", closeMobileMenu)
}


function closeMobileMenu() {
   nav_list.classList.remove("nav--open");
  menuButton.classList.remove("menu--close");
  xButton.classList.remove("xopen");
  body.style.overflowY = "scroll";
}