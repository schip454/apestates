let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".video__item");
  let dots = document.querySelectorAll(".video__thumb");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const testimonialsSlider = new Swiper('.testimonials__slider', {
  // modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.testimonials__slider-next',
    prevEl: '.testimonials__slider-prev',
  },


}); console.log(testimonialsSlider)