addEventListener(
  "scroll",
  () => {
    let img_content = document.getElementById("img_content");
    let img_in = document.getElementById("img_in");

    // 要素の頭が床に着くまでの距離
    let rect_top = img_content.getBoundingClientRect().top;
    // 要素のけつが床に着くまでの距離
    let rect_bottom = img_content.getBoundingClientRect().bottom;
    // windowの高さ
    let height = window.innerHeight;

    let img_content_in = rect_top - height;

    if (0 > img_content_in && 0 < rect_bottom) {
      img_in.classList.add("active_img_in");
    } else {
      img_in.classList.remove("active_img_in");
    }
  },
  { passive: true }
);
