const nav = document.querySelector("header");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    nav.classList.add("header_transparent");
    nav.classList.remove("header");
  } else {
    nav.classList.add("header");
    nav.classList.remove("header_transparent");
  }
}
