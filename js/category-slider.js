let currentIdx = 0; // Agertar sathe conflict na hoyar jonno variable change kora holo
const sliderTrack = document.getElementById("sliderTrack");

function moveSlidec(direction) {
  const cards = document.querySelectorAll(".category-card");
  const totalItems = cards.length;

  const visibleItems = window.innerWidth > 768 ? 8 : 2;
  const maxIndex = totalItems - visibleItems;

  currentIdx += direction;

  if (currentIdx > maxIndex) {
    currentIdx = 0;
  } else if (currentIdx < 0) {
    currentIdx = maxIndex;
  }

  const cardWidth = cards[0].getBoundingClientRect().width + 15;
  sliderTrack.style.transform = `translateX(-${currentIdx * cardWidth}px)`;
}

// ৪ সেকেন্ড পর পর অটো স্লাইড
let autoSlideC = setInterval(() => {
  moveSlidec(1);
}, 4000);

// Mouse thakle pause
const sliderCont = document.querySelector(".slider-container");
sliderCont.addEventListener("mouseenter", () => clearInterval(autoSlideC));
sliderCont.addEventListener("mouseleave", () => {
  autoSlideC = setInterval(() => moveSlidec(1), 4000);
});
