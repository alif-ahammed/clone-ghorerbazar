let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const wrapper = document.getElementById("sliderWrapper");

function updateSlider() {
  // Slide-ke move korano
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Dots update kora
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Next/Prev button functions
function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex >= slides.length) {
    currentIndex = 0; // Shesh hoye gele abar shuru theke
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Shuru theke pichone gele sheshe jabe
  }

  updateSlider();
}

// Dot click function
function currentSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Auto Slide (Optional)
setInterval(() => {
  moveSlide(1);
}, 5000); // Proti 5 second-e slide change hobe

// Initial Active Dot
updateSlider();
