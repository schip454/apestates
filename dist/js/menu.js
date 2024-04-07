
const burgerBtn = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.menu__close')



burgerBtn.addEventListener('click', () => {
  menu.classList.add('open')
  document.body.style.overflow = 'hidden'
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open')
  document.body.style.overflow = 'visible'
})