

const availableSlider = new Swiper('.available__slider', {
  loop: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.available__slider-next',
    prevEl: '.available__slider-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 1.6
    },

    769: {
      slidesPerView: 2.2
    },
    1025: {
      slidesPerView: 3
    }
  },
});

