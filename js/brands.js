let currentBrandPos = 0;

function updateBrandSlider() {
  const track = document.getElementById("brandTrack");
  const cards = document.querySelectorAll(".brand-card");
  const dots = document.querySelectorAll(".brand-dot");

  if (!track || cards.length === 0) return;

  let visibleCount = 4;
  if (window.innerWidth <= 768) visibleCount = 2;
  else if (window.innerWidth <= 1024) visibleCount = 3;

  const maxPos = cards.length - visibleCount;

  if (currentBrandPos > maxPos) currentBrandPos = 0;
  if (currentBrandPos < 0) currentBrandPos = maxPos;

  const gap = 20;
  const moveAmount = cards[0].offsetWidth + gap;
  track.style.transform = `translateX(-${currentBrandPos * moveAmount}px)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentBrandPos);
  });
}

function goToBrandSlide(index) {
  currentBrandPos = index;
  updateBrandSlider();

  clearInterval(brandSlideTimer);
  brandSlideTimer = setInterval(startBrandAutoSlide, 4000);
}

function startBrandAutoSlide() {
  currentBrandPos++;
  updateBrandSlider();
}

let brandSlideTimer = setInterval(startBrandAutoSlide, 4000);
