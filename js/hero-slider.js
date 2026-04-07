let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const wrapper = document.getElementById("sliderWrapper");

function updateSlider() {
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Next/Prev button functions
function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  updateSlider();
}

function currentSlide(index) {
  currentIndex = index;
  updateSlider();
}

setInterval(() => {
  moveSlide(1);
}, 5000);

updateSlider();
