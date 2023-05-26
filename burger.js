const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector("nav");
var burger = document.querySelector("#burgerlogo");

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");
  if (menuShown) {
    console.log(menuShown);
    burger.src = "imgs/burgerclose.png";
  } else {
    console.log(menuShown);
    burger.src = "imgs/burgeropen.png";
  }
}

btn.addEventListener("click", toggleMenu);
