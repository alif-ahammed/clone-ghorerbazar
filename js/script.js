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

// document.querySelectorAll(".nav-links > li > a").forEach((menuLink) => {
//   menuLink.addEventListener("click", function (e) {
//     const parentLi = this.parentElement;
//     const subMenu = parentLi.querySelector("ul");

//     if (subMenu) {
//       e.preventDefault(); // Link click hole page reload hoye jabe na

//       // ACTIVE class toggle korbe (on/off korbe)
//       parentLi.classList.toggle("active");

//       // Ekta khola thakle baki gulo bondho korte chaile (Optional):
//       document.querySelectorAll(".nav-links > li").forEach((otherLi) => {
//         if (otherLi !== parentLi) {
//           otherLi.classList.remove("active");
//         }
//       });
//     }
//   });
// });
