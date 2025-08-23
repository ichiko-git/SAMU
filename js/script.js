document.addEventListener("DOMContentLoaded", () => {
  const menuOpen = document.querySelector(".hamburgermenu--open");
  const menuClose = document.querySelector(".hamburgermenu--close");
  const drowermenu = document.querySelector(".drowermenu");
  const drawerLinks = document.querySelectorAll(".drowermenu a");
  const btn = document.querySelector(".pagetop");
  if (!btn) return;
  const SHOW_OFFSET = 200;

  // トップに戻るクリック時にトップへスクロール
  const update = () => {
    if (window.scrollY > SHOW_OFFSET) {
      btn.classList.add("pagetop--visible");
      btn.classList.remove("pagetop--hidden");
    } else {
      btn.classList.add("pagetop--hidden");
      btn.classList.remove("pagetop--visible");
    }
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ドロワーメニュー表示
  menuOpen.addEventListener("click", function () {
    drowermenu.classList.add("drowermenu--visible");
    drowermenu.classList.remove("drowermenu--hidden");
  });

  // ドロワーメニュー非表示
  const closeDrawer = () => {
    drowermenu.classList.add("drowermenu--hidden");
    drowermenu.classList.remove("drowermenu--visible");
  };
  menuClose.addEventListener("click", closeDrawer);

  // ドロワーメニュー内リンククリック時に閉じてスクロール
  drawerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      const target = document.getElementById(targetId);
      if (!target) return;
      closeDrawer(); // メニューを閉じる
      // 少し待ってからスクロール（アニメーションが自然に見える）
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
  });
});
