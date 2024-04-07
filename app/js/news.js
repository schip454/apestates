
const newsSlider = new Swiper('.news-page__slider', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  effect: "fade",

  pagination: {
    el: ".news-page__slide-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.news-page__slider-next',
    prevEl: '.news-page__slider-prev',
  },


});