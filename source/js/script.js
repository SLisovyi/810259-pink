var navMain = document.querySelector('.main-nav__wrapper');
var navToggle = document.querySelector('.main-nav__toggle');

var navBgPosition = document.querySelector('.main-nav');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
    navBgPosition.classList.add('bg-position');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
    navBgPosition.classList.remove('bg-position');
  }
});
