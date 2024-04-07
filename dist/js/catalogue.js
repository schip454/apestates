

document.addEventListener('DOMContentLoaded', function () {

  const topBtn = document.querySelector('.houses__controls-topbtn')
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo(0, 0)
    })
  }

  const swiper = new Swiper("#firstHousesSlider", {
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const swiper2 = new Swiper("#secondHousesSlider", {
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const popups = document.querySelectorAll('.popup');

  const housePlanPopup = document.getElementById('housePlanPopup');
  const communityMapPopup = document.getElementById('communityMapPopup');
  const requestPopup = document.getElementById('requestPopup');

  const housePlanBtn = document.querySelectorAll('.houses__item-planbtn');
  const communityMapBtn = document.querySelectorAll('.houses__item-mapbtn');
  const requestBtn = document.querySelectorAll('.houses__item-requestbtn');

  const closePopupBtns = document.querySelectorAll('.close-popup');

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
  requestBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      openPopup(requestPopup);
    });
  });

  closePopupBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var popup = this.closest('.popup');
      closePopup(popup);
    });
  });

  popups.forEach(function (popup) {
    popup.addEventListener('click', function (event) {
      if (event.target === popup) {
        closePopup(popup);
        popup.classList.remove('open')
      }
    });
  });




  const sliderImages = document.querySelectorAll('.houses__slider-slide img');
  sliderImages.forEach(image => {
    image.addEventListener('click', () => {
      const imageUrl = image.getAttribute('src');
      const popupImage = document.getElementById('popupImage');
      popupImage.setAttribute('src', imageUrl);

      const imagePopup = document.getElementById('imagePopup');
      openPopup(imagePopup)
    });
  });

  const popupCloseBtns = document.querySelectorAll('.popup__close');
  popupCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const popup = btn.closest('.popup');
      closePopup(popup)
    });
  });




  const moreButton = document.querySelector('.houses__controls-more');
  moreButton.addEventListener('click', function () {
    const hiddenItems = document.querySelectorAll('.houses__item--hidden');
    hiddenItems.forEach(item => {
      item.classList.remove('houses__item--hidden');
      // const requestButton = item.querySelector('.houses__item-requestbtn');
      // requestButton.textContent = 'Request tour';
      // const homeDetailsButton = item.querySelector('.section-link');
      // homeDetailsButton.remove();
    });
    const allItems = document.querySelectorAll('.houses__item')
    allItems.forEach((item) => {
      item.classList.add('more')
    })
  });

  flatpickr(".popup__form-calendar", {});

});




