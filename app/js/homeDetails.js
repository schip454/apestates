
const homeSlider = new Swiper('.home__slider', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const allPopups = document.querySelectorAll('.popup');

const housePlanPopup = document.getElementById('housePlanPopup');
const communityMapPopup = document.getElementById('communityMapPopup');

const housePlanBtn = document.querySelectorAll('.home__controls-planbtn');
const communityMapBtn = document.querySelectorAll('.home__controls-mapbtn');

const closePopupBtns = document.querySelectorAll('.popup__close');

function openPopup(popup) {
  popup.style.display = 'block';
}

function closePopup(popup) {
  popup.style.display = 'none';
}

housePlanBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    openPopup(housePlanPopup);
  });
});

communityMapBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    openPopup(communityMapPopup);
  });
});


closePopupBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var popup = this.closest('.popup');
    closePopup(popup);
  });
});

allPopups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target === popup) {
      closePopup(popup);
      popup.classList.remove('open')
    }
  });
});


