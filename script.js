let current = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  // Disable prev if on first slide
  prevBtn.disabled = index === 0;

  // Disable next if on last slide
  nextBtn.disabled = index === slides.length - 1;
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

// Initial load
showSlide(current);
