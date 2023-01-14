const mouseStalker = document.getElementById("pointer_parent");
let msPos = {
  // マウスストーカーの位置
  s: {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight / 2,
  },
  // マウスポインターの位置
  m: {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight / 2,
  },
};

// マウスストーカーをactiveにする
if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", msActivate);
}
function msActivate() {
  mouseStalker.classList.add("pointer_parent_active");
  document.removeEventListener("mousemove", msActivate);
  // mouseの位置セット
  document.addEventListener("mousemove", function (e) {
    msPos.m.x = e.clientX;
    msPos.m.y = e.clientY;
  });
  // アニメーション開始
  requestAnimationFrame(msPosUpdate);
}

// マウスストーカーを動かす関数
function msPosUpdate() {
  msPos.s.x += (msPos.m.x - msPos.s.x) * 0.1;
  msPos.s.y += (msPos.m.y - msPos.s.y) * 0.1;
  const x = Math.round(msPos.s.x * 10) / 10;
  const y = Math.round(msPos.s.y * 10) / 10;
  mouseStalker.style.transform = `translate3d(` + x + "px," + y + "px, 0)";
  requestAnimationFrame(msPosUpdate);
}

// hover時にclass追加
const stalkerLinkObj = document.querySelectorAll("a, button");
for (let i = 0; i < stalkerLinkObj.length; i++) {
  stalkerLinkObj[i].addEventListener("mouseover", function () {
    mouseStalker.classList.add("pointer_hover");
  });
  stalkerLinkObj[i].addEventListener("mouseout", function () {
    mouseStalker.classList.remove("pointer_hover");
  });
}
