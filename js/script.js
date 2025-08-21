document.addEventListener("DOMContentLoaded", () => {
  // トップへ戻るボタン
  const btn = document.querySelector(".pagetop");
  if (!btn) return;

  const SHOW_OFFSET = 200;

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
});
