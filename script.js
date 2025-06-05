let current = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideSound = document.getElementById('slideSound');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);

    if (i === index) {
      const bg = slide.getAttribute('data-bg');
      if (bg) {
        slide.style.backgroundImage = `url(${bg})`;
      } else {
        slide.style.backgroundImage = 'none';
      }
    }
  });

  // Disable buttons if at start or end
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;

  // Play sound
  slideSound.currentTime = 0;
  slideSound.play();
}

function nextSlide() {
  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  }
}

function prevSlide() {
  if (current > 0) {
    current--;
    showSlide(current);
  }
}

// Initialize
showSlide(current);
