const track = document.getElementById("track");
const dotsContainer = document.getElementById("dots");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

// Create dots
items.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

function goToSlide(index) {
  currentIndex = index;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  goToSlide(currentIndex);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  goToSlide(currentIndex);
});

// Touch swipe support
let touchStartX = 0;
track.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    diff > 0
      ? goToSlide((currentIndex + 1) % items.length)
      : goToSlide((currentIndex - 1 + items.length) % items.length);
  }
});

// Auto-rotate every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  goToSlide(currentIndex);
}, 5000);
