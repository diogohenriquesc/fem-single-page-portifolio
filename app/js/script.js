const slides = document.querySelectorAll('.carousel__slide');
const buttons = document.querySelectorAll('.carousel__button');
let currentItem = 0;
let range = slides.length;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const isRight = button.classList.contains('next');

    if (isRight) {
      currentItem++;
    } else {
      currentItem--;
    }

    if (currentItem < 0) {
      currentItem = 0;
    }

    if (currentItem > range) {
      currentItem = range - 1;
    }

    slides[currentItem].scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
      block: 'nearest'
    });
  })
});

