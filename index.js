const menuButton = document.getElementById("menu");
const nav_list = document.getElementsByClassName("nav-list")[0];
const xButton = document.getElementsByClassName("bi-x-lg")[0];

menuButton.addEventListener("click", (event) => {
  nav_list.classList.toggle("nav--open");
  // nav_list.style.display = "block"
  menuButton.style.display = "none";

  if (xButton.style.display == "none") {
    xButton.style.display = "block";
  } else {
    xButton.style.display = "none";

  }

});
