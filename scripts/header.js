const hamburger_menu = document.getElementById("hamburger_menu");
const bar_1 = document.getElementsByClassName("bar_1");
const bar_2 = document.getElementsByClassName("bar_2");
const bar_3 = document.getElementsByClassName("bar_3");

hamburger_menu.onclick = () => {
  bar_1[0].classList.toggle("active_bar_1");
  bar_2[0].classList.toggle("active_bar_2");
  bar_3[0].classList.toggle("active_bar_3");
  console.log("active");
};
