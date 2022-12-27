let once = false;
let fade_in_target = document.querySelectorAll(".move");
addEventListener("scroll", () => {
  for (let i = 0; i < fade_in_target.length; i++) {
    // スクロール量の計測(変動)
    // scrollTopとpageYOffsetは基本同じ値
    let scroll = document.documentElement.scrollTop || window.pageYOffset;

    // 要素の頭が天井に当たるまでの距離(変動)
    let rect = fade_in_target[i].getBoundingClientRect().top;

    //要素の頭が天井に当たるまでの距離(基本固定)
    let offset = rect + scroll;

    // windowの高さ幅(固定)
    let height = window.innerHeight;

    //  windowの高さ幅をマイナスして天井じゃなくて床に触れた数値にする
    let element_position = offset - height + 150; // 最後の数字はアソビ分

    //  スクロール量が要素の床に触れた数値より大きくなったら
    // (要素が床から出てきたら)クラスを付与する
    if (scroll > element_position && once !== true) {
      fade_in_target[i].classList.add("move_img");
    }
  }
});
