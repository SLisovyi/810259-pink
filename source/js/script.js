var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navFill = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');
navFill.classList.remove('page-header--menu-open');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
    navFill.classList.add('page-header--menu-open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
    navFill.classList.remove('page-header--menu-open');
  }
});
