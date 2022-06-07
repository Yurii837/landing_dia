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
const picture = document.querySelector('.slider__item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currenttrnsform = 0;

function move() {
  const width = -(picture.offsetWidth);

  // eslint-disable-next-line max-len
  list.style.setProperty('transform', `translateX(${width * currenttrnsform}px)`);
}

prevButton.addEventListener('click', function() {
  currenttrnsform--;

  if (currenttrnsform < 0) {
    currenttrnsform = 2;
  }

  move();
});

const moveForvard = () => {
  currenttrnsform++;

  if (currenttrnsform > 2) {
    currenttrnsform = 0;
  }
  move();
};

nextButton.addEventListener('click', function() {
  moveForvard();
});

setInterval(moveForvard, 8000);
