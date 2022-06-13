const menuButton = document.getElementById("menu");
const nav_list = document.getElementsByClassName("nav-list")[0];
const xButton = document.getElementsByClassName("bi-x-lg")[0];
const body = document.body;

menuButton.addEventListener("click", (event) => {
  nav_list.classList.toggle("nav--open");
  menuButton.style.display = "none";

  body.style.overflow = 'hidden';
  xButton.classList.toggle("xopen");


  // if (xButton.style.display == "none") {
  //   xButton.style.display = "block";
  //   xButton.style.fontSize = "400px";
  // } else {
  //   xButton.style.display = "none";

  // }

});
