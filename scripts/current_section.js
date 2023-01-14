window.addEventListener("scroll", () => {
  var grid =
    document.getElementById("grid").getBoundingClientRect().top -
    window.innerHeight;
  var contact =
    document.getElementById("contact").getBoundingClientRect().top -
    window.innerHeight;
  var card =
    document.getElementById("card").getBoundingClientRect().top -
    window.innerHeight;
  var current_box = document.getElementById("current_box");

  if (0 > grid && 0 > contact && 0 > card) {
    current_box.classList.remove("move_other");
    current_box.classList.remove("move_grid");
    current_box.classList.remove("move_contact");
    current_box.classList.add("move_card");
  } else if (0 > grid && 0 > contact) {
    current_box.classList.remove("move_other");
    current_box.classList.remove("move_grid");
    current_box.classList.add("move_contact");
    current_box.classList.remove("move_card");
  } else if (0 > grid) {
    current_box.classList.remove("move_other");
    current_box.classList.add("move_grid");
    current_box.classList.remove("move_contact");
    current_box.classList.remove("move_card");
  } else {
    current_box.classList.add("move_other");
    current_box.classList.remove("move_grid");
    current_box.classList.remove("move_contact");
    current_box.classList.remove("move_card");
  }
});
