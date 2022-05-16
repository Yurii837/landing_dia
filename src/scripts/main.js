'use strict';

// disable reloading when submit form

function stopDefAction(event) {
  document.getElementById('form').reset();
  event.preventDefault();
}

document.getElementById('form').addEventListener(
  'submit', stopDefAction, false
);

// burger menu

const nav = document.querySelector('.nav__main');
const toggler = document.querySelector('.nav__icon--menu-opener');

toggler.addEventListener('click', function() {
  nav.classList.toggle('nav--open');
  toggler.classList.toggle('nav--open');
});

// 100vw minus vertical scroll

function setVw() {
  const vw = document.documentElement.clientWidth / 100;

  document.documentElement.style.setProperty('--vw', `${vw}px`);
}

setVw();
window.addEventListener('resize', setVw);

// slider

const list = document.querySelector('.slider__list');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let count = 1;

function move(isNext) {
  const moveValue = isNext ? 1 : -1;

  list.style.setProperty('transform', `translateX(${moveValue * 300}px)`);
}

prevButton.addEventListener('click', function() {
  count++;
  move(false);
});

nextButton.addEventListener('click', function() {
  move(true);
});
