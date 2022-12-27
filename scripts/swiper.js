const swiper = new Swiper(".swiper", {
  //ブレイクポイントの設定
  //   breakPoints: {
  //     600: {
  //       slidesPreview: 2,
  //     },
  //   },

  //切り替えの速さ
  speed: 1200,
  //カーソルの指定
  grabCursor: true,

  //フェードイン
  effect: "fade",
  //自動再生
  autoplay: {
    deray: 3500,
    //操作時、自動再生を止める(true)
    disableOnInteraction: false,
  },
  //ループ
  //   loop: true,
  // 次の画像も表示
  //   slidesPerView: 1.5,
  //   centeredSlides: true,
  //   slidesPerView: 3で何枚のスライドを表示させるか。
  //   spaceBetween: 0でスライドとスライドの間の距離（余白）を指定。
  //   50px空けたい場合は、spaceBetween: 50と指定。
  //   initialSlide: 2は最初に何枚目のスライドを表示させるか。
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    //プログレスバー
    // type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
