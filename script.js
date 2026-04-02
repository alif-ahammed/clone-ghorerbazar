const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

// Open Menu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

// Close Menu
const closeMenu = () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
};

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu); // Background-e click korle bondho hobe

// Dropdown Toggle Logic
const moreMenuBtn = document.getElementById("moreMenuBtn");
const moreDropdown = document.getElementById("moreDropdown");

moreMenuBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Page jate jump na kore
  moreDropdown.classList.toggle("show");
});

// Screen-er onno kothao click korle jate dropdown bondho hoye jay
window.addEventListener("click", function (e) {
  if (!moreMenuBtn.contains(e.target)) {
    moreDropdown.classList.remove("show");
  }
});
