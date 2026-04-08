const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

const closeMenu = () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
};

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

const moreMenuBtn = document.getElementById("moreMenuBtn");
const moreDropdown = document.getElementById("moreDropdown");

moreMenuBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Page jate jump na kore
  moreDropdown.classList.toggle("show");
});

window.addEventListener("click", function (e) {
  if (!moreMenuBtn.contains(e.target)) {
    moreDropdown.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("seeMoreBtn");
  const textWrapper = document.querySelector(".text-content");

  if (btn && textWrapper) {
    if (textWrapper.scrollHeight > textWrapper.clientHeight) {
      btn.style.display = "inline";
    }

    btn.addEventListener("click", function () {
      textWrapper.classList.toggle("expanded");

      if (textWrapper.classList.contains("expanded")) {
        btn.innerText = " See Less";
      } else {
        btn.innerText = "... See More";
      }
    });
  }
});
