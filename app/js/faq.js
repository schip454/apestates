document.addEventListener('DOMContentLoaded', function () {
  const accordionTitles = document.querySelectorAll('.faq__item-title');

  accordionTitles.forEach(function (title) {
    console.log(title)
    title.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const isOpen = content.style.maxHeight !== '0px';
      const accordions = document.querySelectorAll('.faq__item-content');

      accordions.forEach(function (item) {
        if (item !== content) {
          item.style.maxHeight = '0';
          item.previousElementSibling.classList.remove('active');
        }
      });

      content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
      this.classList.toggle('active');
    });
  });
});