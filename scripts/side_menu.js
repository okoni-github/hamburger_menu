window.addEventListener("scroll", () => {
  let side_menu = document.getElementById("side_menu");
  let header = document.getElementById("header");
  let headerHight = header.offsetHeight;
  let offset = window.scrollY;
  let footer = document.getElementById("footer");
  let footerRect = footer.getBoundingClientRect().top;

  if (headerHight < offset) {
    side_menu.classList.add("active_side_menu");
  } else {
    side_menu.classList.remove("active_side_menu");
  }

  if (footerRect < 0) {
    side_menu.classList.remove("active_side_menu");
  }
});
