let hamburger = document.querySelector('.menuIcon');
let closeX = document.querySelector('.closeIcon');
let dropdown = document.querySelector('#menu-wrapper');

let buttonArr = [hamburger, closeX];
buttonArr.forEach((e) => {
  e.addEventListener('click', () => {
    dropdown.classList.toggle('visible');
    hamburger.classList.toggle('hidden');
    closeX.classList.toggle('visible');
  });
});
