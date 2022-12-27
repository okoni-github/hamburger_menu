const contact_button = document.getElementById("contact_button");
const move_button = document.getElementById("move_button");

contact_button.addEventListener("mouseover", () => {
  move_button.classList.add("move_button");
  console.log("add");
});

contact_button.addEventListener("mouseleave", () => {
  move_button.classList.remove("move_button");
  console.log("remove");
});
