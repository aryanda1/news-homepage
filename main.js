const menu = document.getElementById("menu");
const menu_close = document.getElementById("menu_close");
const nav_bar = document.getElementsByClassName("nav_bar");
const overlay = document.getElementsByClassName("overlay")[0];

function toggleStatus() {
  if (window.innerWidth < 778)
    if (overlay.classList.contains("hidden")) {
      overlay.classList.remove("hidden");
      nav_bar[0].classList.remove("hidden");
      setTimeout(() => {
        nav_bar[0].classList.add("visible");
        overlay.classList.add("visible");
      }, 1);
      menu_close.classList.remove("hidden");
      menu.classList.add("hidden");
    } else {
      overlay.classList.remove("visible");
      nav_bar[0].classList.remove("visible");
      setTimeout(() => {
        overlay.classList.add("hidden");
        nav_bar[0].classList.add("hidden");
      }, 500);
      menu.classList.remove("hidden");
      menu_close.classList.add("hidden");
    }
}

// menu.addEventListener("click", function (e) {});

// menu_close.addEventListener("click", function (e) {});
