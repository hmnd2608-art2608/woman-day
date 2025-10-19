onload = () => {
  document.body.classList.remove("container");
};
// ...existing code...
(function () {
  function updateGreetingFont() {
    const title = document.querySelector('.greeting__title');
    const date = document.querySelector('.greeting__date');
    if (!title || !date) return;

    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
      // tăng kích thước cho điện thoại (override bằng !important)
      title.style.setProperty('font-size', '40px', 'important');
      title.style.setProperty('line-height', '1.05', 'important');
      date.style.setProperty('font-size', '18px', 'important');
    } else {
      // loại bỏ override để dùng CSS mặc định
      title.style.removeProperty('font-size');
      title.style.removeProperty('line-height');
      date.style.removeProperty('font-size');
    }
  }

  window.addEventListener('DOMContentLoaded', updateGreetingFont);
  window.addEventListener('resize', updateGreetingFont);
  window.addEventListener('orientationchange', updateGreetingFont);
})();