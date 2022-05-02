const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

navigation.classList.remove('main-header__navigation--nojs');

burger.addEventListener('click', function (evt) {
  evt.preventDefault();
  burger.classList.toggle('burger--opened');
  navigation.classList.toggle('main-header__navigation--opened');
  navigation.classList.toggle('main-header__navigation--closed');
});
