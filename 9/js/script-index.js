const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const rangeButtonBefore = document.querySelector('.range-button-before');
const rangeButtonAfter = document.querySelector('.range-button-after');
const sliderScreenBefore = document.querySelector('.slider__screen--before');
const rangeBar = document.querySelector('.range__bar');

navigation.classList.remove('main-header__navigation--nojs');

burger.addEventListener('click', function(evt) {
  evt.preventDefault();
  burger.classList.toggle('burger--opened');
  navigation.classList.toggle('main-header__navigation--opened');
  navigation.classList.toggle('main-header__navigation--closed');
});

rangeButtonBefore.addEventListener('click', function(evt) {
  evt.preventDefault();
  sliderScreenBefore.classList.remove('slider__screen--half');
  sliderScreenBefore.classList.add('slider__screen--full');
  rangeBar.classList.remove('range__bar--center');
  rangeBar.classList.remove('range__bar--after');
  rangeBar.classList.add('range__bar--before');
});

rangeButtonAfter.addEventListener('click', function (evt) {
  evt.preventDefault();
  sliderScreenBefore.classList.remove('slider__screen--full');
  sliderScreenBefore.classList.add('slider__screen--zero');
  rangeBar.classList.add('range__bar--after');
});
