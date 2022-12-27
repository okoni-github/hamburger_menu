// ハンバーガーメニュー
const hamburger_menu = document.getElementById("hamburger_menu");
const bar_1 = document.getElementsByClassName("bar_1");
const bar_2 = document.getElementsByClassName("bar_2");
const bar_3 = document.getElementsByClassName("bar_3");
const header_menu = document.getElementsByClassName("header_menu_2");
const mask = document.getElementById("mask");
const body = document.getElementById("body");

// 【注意】onclickの対象はID名じゃないとダメっぽい
hamburger_menu.onclick = () => {
  bar_1[0].classList.toggle("active_bar_1");
  bar_2[0].classList.toggle("active_bar_2");
  bar_3[0].classList.toggle("active_bar_3");
  header_menu[0].classList.toggle("active_header_menu");
  mask.classList.toggle("active_mask");
  body.classList.toggle("active_body");
};

noScroll = () => {
  const handle = (e) => {
    e.preventDefault();
  };

  if (mask.classList.contains("active_mask")) {
    document.addEventListener("touchmove", handle, { passive: false });
    document.addEventListener("mousewheel", handle, { passive: false });
  } else {
    document.removeEventListener("touchmove", handle, { passive: false });
    document.removeEventListener("mousewheel", handle, { passive: false });
  }
};

mask.onclick = () => {
  bar_1[0].classList.toggle("active_bar_1");
  bar_2[0].classList.toggle("active_bar_2");
  bar_3[0].classList.toggle("active_bar_3");
  header_menu[0].classList.toggle("active_header_menu");
  mask.classList.toggle("active_mask");
  body.classList.toggle("active_body");
};

// スムーススクロール
const smoothScroll = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < smoothScroll.length; i++) {
  smoothScroll[i].onclick = (e) => {
    e.preventDefault();
    bar_1[0].classList.remove("active_bar_1");
    bar_2[0].classList.remove("active_bar_2");
    bar_3[0].classList.remove("active_bar_3");
    header_menu[0].classList.remove("active_header_menu");
    mask.classList.remove("active_mask");
    body.classList.remove("active_body");

    let href = smoothScroll[i].getAttribute("href");
    let targetElement = document.getElementById(href.replace("#", ""));

    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const target = rect + offset - 50;

    scrollTo({
      top: target,
      behavior: "smooth",
    });
  };
}

// トップボタン

window.addEventListener("scroll", () => {
  let top_button = document.getElementById("top_button");
  let header = document.getElementById("header");
  let headerHight = header.offsetHeight;
  let offset = window.scrollY;

  if (headerHight < offset) {
    top_button.classList.add("active_top_button");
  } else {
    top_button.classList.remove("active_top_button");
  }
});

top_button.onclick = (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
