const nav = document.getElementsByTagName("header");
window.onscroll = function () {
  if (document.body.scrollTop >= 200) {
    header.classList.add("header");
    header.classList.remove("header_transparent");
  } else {
    header.classList.add("header_transparent");
    header.classList.remove("header");
  }
};
