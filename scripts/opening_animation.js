let animation_img = document.getElementById("animation_img");

addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    animation_img.classList.add("active_animation");
    console.log("aaaaa");
  }, 3000);

  setTimeout(() => {
    animation_img.classList.remove("active_animation");
    console.log("bbbbb");
  }, 3000);
});
