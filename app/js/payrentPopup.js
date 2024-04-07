const popups = document.querySelectorAll('.popup');

const payrentPopup = document.getElementById('payrentPopup');

const payrentBtn = document.querySelector('#payrentBtn');
const payrentBtnMobile = document.querySelector('#payrentBtnMobile');

const closePopupBtn = document.querySelector('.popup__close');

function openPopup(popup) {
  popup.style.display = 'block';
}

function closePopup(popup) {
  popup.style.display = 'none';
}


payrentBtn.addEventListener('click', function () {
  openPopup(payrentPopup);
});

payrentBtnMobile.addEventListener('click', function () {
  openPopup(payrentPopup);
});

closePopupBtn.addEventListener('click', function () {
  const popup = this.closest('.popup');
  closePopup(popup);
});
popups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target === popup) {
      closePopup(popup);
      popup.classList.remove('open')
    }
  });
});
