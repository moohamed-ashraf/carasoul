const carousel = document.querySelector(".carousel-container");
const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".carousel-indicators div");
const leftArrow = document.querySelector(".arrows");
const rightArrow = document.querySelector(".arrows.right");

let currentIndex = 0;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

leftArrow.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});
rightArrow.addEventListener("click", function goToNext() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

setInterval(goToNext, 5000);
