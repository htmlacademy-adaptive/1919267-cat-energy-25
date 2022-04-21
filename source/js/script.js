let burger = document.querySelector('.burger');
let navigation = document.querySelector('.navigation');

navigation.classList.remove('main-header__navigation--nojs');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--opened');
  navigation.classList.toggle('main-header__navigation--opened');
  navigation.classList.toggle('main-header__navigation--closed');
})
